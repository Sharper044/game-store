DELETE FROM gs_cart_items
WHERE cart_id = $1;

DELETE FROM gs_carts
WHERE id = $1;