-- Used to adjust the quantity of an item in a cart. --

UPDATE gs_cart_items
SET quantity = $3
WHERE cart_id = $1 AND product_id = $2;