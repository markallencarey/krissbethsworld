INSERT INTO users (first_name, last_name, address, apt_no, city, state, country, zip_code, phone_no)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *;