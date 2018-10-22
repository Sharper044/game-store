-- Used to create a user in the database --

INSERT INTO gs_customers (username, password)
VALUES ($1, $2);

SELECT *
FROM rew_users
WHERE username = $1 AND password = $2;