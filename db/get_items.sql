SELECT ci.id, ci.product_id, ci.quantity, p.price
FROM gs_cart_items AS ci
JOIN gs_products AS p
ON ci.product_id = p.id
WHERE cart_id = $1;