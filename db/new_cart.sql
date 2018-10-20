INSERT INTO gs_carts (customer_id, active)
VALUES ($1, 'true');

SELECT *
FROM gs_carts
WHERE customer_id = $1 AND active = 'true';