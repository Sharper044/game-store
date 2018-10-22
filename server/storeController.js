// These functions handle all products, orders, and carts on the backend.

module.exports = {
  // Used to get all the products sent to the frontend.
  getProducts: (req, res) => {
    const db = req.app.get('db');
    db.get_products()
      .then(products => {
        res.status(200).send(products);
      }).catch(console.log);
  },

  // Used on the profile page to display all past orders.
  getOrders: async (req, res) => {
    const db = req.app.get('db');
    try {
      let orders = await db.get_orders([req.body.customer_id]);

      // Function to assemble the individual orders.
      orders = orders.map(async order => {
        const items = await db.get_items([order.cart_id]);
        const total = items.reduce((accumulator, item) => accumulator + (item.price * item.quantity));
        return { ...order, items, total }
      });

      res.status(200).send(orders);

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Used to convert the active cart into an order. Should only be done by a user who is logged in. Also upon success the client needs to ping newCart()
  placeOrder: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, order_time, customer_id} = req.body;

      // Checking if the cart belongs to the user.
      const checkCustomerId = await db.check_cart([cart_id]);
      if (checkCustomerId[0].customer_id !== customer_id) {
        res.status(403).send('You are not permitted to place an order for anyone other than yourself.');
      }

      await db.place_order([cart_id, order_time, customer_id]);

      next(); // To getOrders()

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Used if the client wants to remove an order from their history. Should only be done if the user is logged in.
  deleteOrder: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {order_id, customer_id} = req.body;

      // Checking if the order belongs to the user.
      const checkCustomerId = await db.check_order([order_id]);
      if (checkCustomerId[0].customer_id !== customer_id) {
        res.status(403).send('You are not permitted to delete an order for anyone other than yourself.');
      }

      await db.delete_order([order_id])
      
      next(); // To getOrders()

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Used to get the currently active cart for the user.
  getCart: async (req, res) => {
    const db = req.app.get('db');
    try {
      let cart = await db.get_cart([req.body.customer_id])

      // Function to assemble the cart
      const items = await db.get_items([cart[0].id]);
      const total = items.reduce((accumulator, item) => accumulator + (item.price * item.quantity));
      cart[0] = { ...cart[0], items, total };

      res.status(200).send(cart);

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // This function will be called any time an item is added or removed form the cart or the quantity is changed. Removal is done by putting the quantity to 0. (Though this could be done by a remove button on the front end.)
  updateCart: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id, items} = req.body;

      // Check if this cart belongs to the user.
      const checkCustomerId = await db.check_cart([cart_id]);
      if (checkCustomerId[0].customer_id !== customer_id) {
        res.status(403).send('You are not permitted to update any cart except your own.');
      }

      // For each item in the request, check the status. If 'delete', remove it from the cart in the database, if 'new', add it to the database, else, update the quantity in the database.
      items.forEach(async item => {
        switch(item.status) {
          case 'delete':
            await db.delete_item_from_cart([cart_id, item.product_id]);
            break;
          case 'new':
            await db.add_item_to_cart([cart_id, item.product_id, item.quantity]);
            break;
          default:
            await db.update_cart([cart_id, item.product_id, item.quantity]);
        }
      });

      next(); // To getCart()

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Used to generate and send a new cart to the client.
  newCart: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {customer_id} = req.body;

      // Check to see if the user already has an active cart. If so, give them that cart. Else, make a new cart and send it.
      const activeCart = await db.check_cart_active([customer_id]);
      if (activeCart.findIndex(cart => cart.active === 'true') >= 0) {
        next(); // to getCart()
      } else {
        const cart = await db.new_cart([customer_id])
        res.status(200).send(cart);
      }
      
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Used to delete the cart if the user wants to start over. But not without sending a new cart after. (WAHAHAHA!!! They will never be rid of my carts!!!)
  deleteCart: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id} = req.body;

      // Check to see if the cart they are trying to delete belongs to them.
      const checkCustomerId = await db.check_cart([cart_id]);
      if (checkCustomerId !== customer_id) {
        res.status(403).send('You are not permitted to delete any cart except your own.');
      }
  
      await db.delete_cart([req.body.cart_id])
      
      next(); // To newCart()

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Called after the user registers on my site. It converts their cart to use their proper user id.
  mergeCartRegister: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id} = req.body;

      await db.merge_cart_register([cart_id, customer_id]);

      next(); // To getCart()

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Called after the user logs in. 
  mergeCartLogin: async (req, res) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id} = req.body;

      // It checks if they have an active cart (which they always should). But in case they do not, the logic should be the same as though they had just registered. So the current cart is altered to have their user id.
      let cart = await db.get_cart([req.body.customer_id]);
      if (cart.length === 0) {
        await db.merge_cart_register([cart_id, customer_id])
        next(); // To get cart
      } else {

        // If they do have an active cart. The cart they currently have and their stored active cart in the database are blended into one.
        const newItems = await db.get_items([cart_id]);
        newItems.forEach(async item => {await db.merge_item([cart[0].id, item.id])});
        const items = await db.get_items([cart[0].id]);
        const total = items.reduce((accumulator, item) => accumulator + (item.price * item.quantity));
        cart[0] = { ...cart[0], items, total };
  
        // Then the old cart from before logging in is deleted.
        await db.delete_cart([cart_id])
  
        // Send the blended cart to the user.
        res.status(200).send(cart);
      }
      
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
