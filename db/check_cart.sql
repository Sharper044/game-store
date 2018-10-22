-- to ensure that the cart in question belongs to the user, this query is ran to get the id --
SELECT customer_id
FROM gs_carts
WHERE id = $1;