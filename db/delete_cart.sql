-- The two step process used to delete all items from a cart and then delete the cart itself. --
DELETE FROM gs_cart_items
WHERE cart_id = $1;

DELETE FROM gs_carts
WHERE id = $1;