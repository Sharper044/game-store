-- Geting the user by username for password verification. --

SELECT *
FROM gs_customers
WHERE username = $1;