SELECT cart.id, user_id, users.first_name, users.last_name, product_id, products.name, products.img, products.price, quantity FROM cart
JOIN users ON cart.user_id = users.id
JOIN products ON cart.product_id = products.id
WHERE user_id = $1 AND product_id = $2;