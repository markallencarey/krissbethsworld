SELECT * FROM auth
JOIN users ON auth.id = users.id
WHERE email = $1;