SELECT *
FROM gs_orders AS o
JOIN gs_carts AS ca
ON o.cart_id = ca.id
JOIN gs_cart_items AS ci
ON c.id = ci.cart_id
JOIN gs_products AS p
ON ci.product_id = p.id
WHERE o.customer_id = $1;

-- TODO: add total to the returned value.