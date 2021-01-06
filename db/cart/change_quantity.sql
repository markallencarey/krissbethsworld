UPDATE cart
SET quantity = $1
WHERE user_id = $2 AND product_id = $3;