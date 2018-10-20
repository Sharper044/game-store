SELECT *
FROM gs_carts
WHERE customer_id = $1 AND active = 'true';