SELECT *
FROM gs_carts AS ca
JOIN gs_cart_items AS ci
ON c.id = ci.cart_id
JOIN gs_products AS p
ON ci.product_id = p.id
WHERE ca.customer_id = $1;

-- TODO: add total to the returned value.