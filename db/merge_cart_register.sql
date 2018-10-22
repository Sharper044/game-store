-- If a person has just regestered to the site, their cart needs to be updated to reflect their new id. --

UPDATE gs_cart
SET customer_id = $2
WHERE id = $1;