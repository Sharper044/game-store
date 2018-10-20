SELECT *
FROM gs_cart_items AS ci
JOIN gs_products AS p
ON ci.product_id = p.id
WHERE ci.cart_id = $1;