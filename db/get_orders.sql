-- Get all of the customer's orders --

SELECT *
FROM gs_orders
WHERE customer_id = $1;