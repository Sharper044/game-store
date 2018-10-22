-- Used to move items from one cart to another. --

UPDATE gs_cart_items
SET cart_id = $1
WHERE id = $2;