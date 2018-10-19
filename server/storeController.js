module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db');
    db.get_products()
      .then(products => {
        res.status(200).send(products);
      }).catch(console.log);
  },

  getOrders: (req, res) => {
    const db = req.app.get('db');
    db.get_orders([req.body.customer_id])
      .then(orders => {
        res.status(200).send(orders);
      }).catch(console.log);
  },

  placeOrder: async (req, res) => {
    const db = req.app.get('db');
    const {cart_id, order_time, customer_id} = req.body;
    const checkCustomerId = await db.check_order([cart_id]);

    if (checkCustomerId !== customer_id) {
      res.status(403).send('You are not permitted to place an order for anyone other than yourself.');
    }

    await db.place_order([cart_id, order_time, customer_id]);
    db.get_orders([customer_id])
      .then(orders => {
        res.status(200).send(orders);
      }).catch(console.log);
  },

  deleteOrder: async (req, res) => {
    const db = req.app.get('db');
    const {order_id, customer_id} = req.body;
    const checkCustomerId = await db.check_order([order_id]);

    if (checkCustomerId !== customer_id) {
      res.status(403).send('You are not permitted to delete an order for anyone other than yourself.');
    }

    await db.delete_order([order_id])
    db.get_orders([customer_id])
      .then(orders => {
        res.status(200).send(orders);
      }).catch(console.log);
  },

  getCart: (req, res) => {
    const db = req.app.get('db');
    db.get_cart([req.body.customer_id])
      .then(cart => {
        res.status(200).send(cart);
      }).catch(console.log);
  },

  updateCart: async (req, res) => {
    const db = req.app.get('db');
    const {cart_id, customer_id, items} = req.body;
    const checkCustomerId = await db.check_cart([cart_id]);

    if (checkCustomerId !== customer_id) {
      res.status(403).send('You are not permitted to update any cart except your own.');
    }

    items.forEach(async item => {
      await db.update_cart([cart_id, item.product_id, item.quantity]); // TODO: I need to create this SQL method and I need to put try catches on each await.
    });
    db.get_cart([req.body.customer_id])
      .then(cart => {
        res.status(200).send(cart);
      }).catch(console.log);
  },

  newCart: async (req, res) => {
    const db = req.app.get('db');
    const {customer_id} = req.body;
    const activeCart = await db.check_cart_active([customer_id]); // TODO: Add in this SQL method.

    if (activeCart) {
      res.status(403).send('You are not permitted to have more than 1 active cart at a time.');
    }

    db.new_cart([customer_id])
      .then(cart => {
        res.status(200).send(cart);
      }).catch(console.log);
  },

  deleteCart: async (req, res) => {
    const db = req.app.get('db');
    const {cart_id, customer_id} = req.body;
    const checkCustomerId = await db.check_cart([cart_id]);

    if (checkCustomerId !== customer_id) {
      res.status(403).send('You are not permitted to delete any cart except your own.');
    }

    db.delete_cart([req.body.cart_id])
      .then(() => {
        res.status(200).send({});
      }).catch(console.log);
  },


};
