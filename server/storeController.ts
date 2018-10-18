const storeController = {
  getProducts: (req, _res, _next) => {
    const db = req.app.get('db');
  },
};

export default storeController;
