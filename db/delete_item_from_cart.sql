-- Used to delete an item fom a cart --
DELETE FROM gs_cart_items
WHERE cart_id = $1 AND product_id = $2;