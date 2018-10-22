-- Used to convert a cart from being active to inactive and connecting it to a new order in the database. --

INSERT INTO gs_orders (cart_id, order_time, customer_id)
VALUES ($1, $2, $3);

UPDATE gs_carts
SET active = 'false'
WHERE id = $1;