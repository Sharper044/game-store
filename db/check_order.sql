-- to ensure that the order in question belongs to the user, this query is ran to get the id --
SELECT customer_id
FROM gs_orders
WHERE id = $1;