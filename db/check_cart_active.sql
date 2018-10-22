-- Used to check if any of the carts on the durrent user are active --
SELECT active
FROM gs_carts
WHERE customer_id = $1;