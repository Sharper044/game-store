module.exports = {
  getProducts: (req, _res, _next) => {
    const db = req.app.get('db');
  },
};
