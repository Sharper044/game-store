// TODO: I need to put try catches on each await.
module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db');
    db.get_products()
      .then(products => {
        res.status(200).send(products);
      }).catch(console.log);
  },

  getOrders: async (req, res) => {
    const db = req.app.get('db');
    try {
      let orders = await db.get_orders([req.body.customer_id]);

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

  placeOrder: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, order_time, customer_id} = req.body;
      const checkCustomerId = await db.check_cart([cart_id]);

      if (checkCustomerId[0].customer_id !== customer_id) {
        res.status(403).send('You are not permitted to place an order for anyone other than yourself.');
      }

      await db.place_order([cart_id, order_time, customer_id]);

      next();
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteOrder: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {order_id, customer_id} = req.body;
      const checkCustomerId = await db.check_order([order_id]);

      if (checkCustomerId[0].customer_id !== customer_id) {
        res.status(403).send('You are not permitted to delete an order for anyone other than yourself.');
      }

      await db.delete_order([order_id])
      
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getCart: async (req, res) => {
    const db = req.app.get('db');
    try {
      let cart = await db.get_cart([req.body.customer_id])
      const items = await db.get_items([cart[0].id]);
      const total = items.reduce((accumulator, item) => accumulator + (item.price * item.quantity));

      cart[0] = { ...cart[0], items, total };
      res.status(200).send(cart);

    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateCart: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id, items} = req.body;
      const checkCustomerId = await db.check_cart([cart_id]);

      if (checkCustomerId[0].customer_id !== customer_id) {
        res.status(403).send('You are not permitted to update any cart except your own.');
      }

      items.forEach(async item => {
        if(item.quantity === 0) {
          await db.delete_item_from_cart([cart_id, item.product_id]);
        } else {
          await db.update_cart([cart_id, item.product_id, item.quantity]);
        }
      });

      next();
    } catch (error) {
      res.status(500).send(error);
    }
  },

  newCart: async (req, res) => {
    const db = req.app.get('db');
    try {
      const {customer_id} = req.body;
      const activeCart = await db.check_cart_active([customer_id]);
      if (activeCart.findIndex(cart => cart.active === 'true') >= 0) {
        res.status(403).send('You are not permitted to have more than 1 active cart at a time.');
      }
  
      const cart = await db.new_cart([customer_id])
      res.status(200).send(cart);

    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteCart: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id} = req.body;
      const checkCustomerId = await db.check_cart([cart_id]);
  
      if (checkCustomerId !== customer_id) {
        res.status(403).send('You are not permitted to delete any cart except your own.');
      }
  
      await db.delete_cart([req.body.cart_id])
      
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  },

  mergeCartRegister: async (req, res, next) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id} = req.body;

      await db.merge_cart_register([cart_id, customer_id])
      next(); // To get cart

    } catch (error) {
      res.status(500).send(error);
    }
  },

  mergeCartLogin: async (req, res) => {
    const db = req.app.get('db');
    try {
      const {cart_id, customer_id} = req.body;

      let cart = await db.get_cart([req.body.customer_id]);
  
      if (cart.length === 0) {
        await db.merge_cart_register([cart_id, customer_id])
        next(); // To get cart
      } else {
        const newItems = await db.get_items([cart_id]);
  
        newItems.forEach(async item => {await db.merge_item([cart[0].id, item.id])});
        
        const items = await db.get_items([cart[0].id]);
        
        const total = items.reduce((accumulator, item) => accumulator + (item.price * item.quantity));
  
        cart[0] = { ...cart[0], items, total };
  
        await db.delete_cart([cart_id])
  
        res.status(200).send(cart);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
