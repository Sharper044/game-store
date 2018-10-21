UPDATE gs_cart
SET customer_id = $2
WHERE id = $1;