DELETE FROM gs_cart_items
WHERE cart_id = $1 AND quantity = $2;