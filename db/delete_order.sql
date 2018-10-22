-- The three step process to delete an order and its coresponding cart --
DELETE FROM gs_cart_items AS ci
USING gs_orders AS o
WHERE o.id = $1 AND o.cart_id = ci.cart_id;

DELETE FROM gs_carts AS c
USING gs_orders AS o
WHERE o.id = $1 AND o.cart_id = c.id;

DELETE FROM gs_orders
WHERE id = $1;