INSERT INTO gs_orders (cart_id, order_time, customer_id)
VALUES ($1, $2, $3);

UPDATE gs_carts
SET active = FALSE
WHERE id = $1;