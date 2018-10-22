-- This is used to add new items to the cart. --
INSERT INTO gs_cart_items (cart_id, product_id, quantity)
VALUES ($1, $2, $3);