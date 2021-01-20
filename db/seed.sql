DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS auth;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  address VARCHAR (200),
  apt_no VARCHAR (200),
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  zip_code INT,
  phone_no VARCHAR(100)
);

CREATE TABLE auth (
  id INT REFERENCES users(id),
  email VARCHAR(100),
  hash TEXT
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  type TEXT,
  store_quantity INT,
  description TEXT,
  img TEXT,
  price FLOAT
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  product_id INT REFERENCES products(id),
  quantity INT
);

insert into products (name, type, store_quantity, description, img, price) values ('Vintage Stationery Kit', 'Stationery Kit', 3, "This vintage stationery kit comes with 65 pieces, which include: 5 Kraft envelopes with matching notecard, 5 washi tape swatches, 3 sticker sheets, 20 die cut stickers, 7 used vintage postage stamps for decoration, 1 vintage tag, 2 mini doilies, 1 large Kraft pocket envelope, 2 mini Kraft envelopes, 4 miscellaneous vintage scrapbook sheets, 2 vintage themed notecards, 3 vintage tickets, 5 mulberry/vintage mini sheets, and 5 book pages. This kit is a great gift for a friend or family member who is into pen-palling, journaling, and all things stationery. It is also is perfect for decorating cards and envelopes for pen-pals or special someones. Everything is wrapped neatly in a large doilie and tied with yarn.", 'https://ibb.co/7W8RFnL', 15.00);
insert into products (name, type, store_quantity, description, img, price) values ('Never Apologize for Having Dreams - 5x7 Wall Art Print', 'Print', 10, "This print is printed on glossy paper and measures at 5x7 inches. This is a PHYSICAL COPY and will be shipped to your home. This wall print is a great gift for any small business owner or anyone who loves to dream and reach their goals. This is perfect to put in a frame and hang on your wall or to hang on it's own with command hanging tape.", 'https://ibb.co/8bQqBFz', 4.50);
insert into products (name, type, store_quantity, description, img, price) values ('Paint Your Reality - 4x6 Postcard', 'Postcard', 63, "This postcard is printed on 14pt standard matte cardstock. It was illustrated by me and has a blank back. It would be a great gift for any artist or pen-pal that loves creativity.", 'https://ibb.co/zm5Rf2h', 1.75);
insert into products (name, type, store_quantity, description, img, price) values ('Come Follow Me - 5x7 Wall Art Print', 'Print', 5, "This gospel wall print measures at 5x7 inches and comes as a physical print. This is a great gift for a baptism, first communion, etc. It would be a great gift for any friend who wants to remember to push forward and endure to the end.", 'https://ibb.co/Cm8pLsB', 4.50);
insert into products (name, type, store_quantity, description, img, price) values ('Postcard Grab Bag', 'Grab Bag', 15, "This postcard grab bag includes one of each of my six 2020 Collection postcard designs found here on my website. The postcards included in this pack are: Paint Your Reality, Write Your Own Story, Girl at Lake, Happy Little Succulents, Bookshelf Bliss, and Write Create Inspire. Images of these postcards can be found in their individual listings. It is a great way to purchase all of my postcards at a more affordable price. This would make a great gift for a pen-pal, friend, or anyone who loves to send happy mail.", 'https://ibb.co/S5KFCwV', 8.00);
insert into products (name, type, store_quantity, description, img, price) values ('Write Your Own Story (Typewriter) - 4x6 Postcard', 'Postcard', 140, "This postcard is printed on 14pt standard glossy cardstock. It was illustrated by me and on the back has a printed typwriter logo for the stamp placement, a line dividing the address and note sections. It would be a great gift for any artist or pen-pal that loves creativity.", 'https://ibb.co/kyZb3D1', 1.75);
insert into products (name, type, store_quantity, description, img, price) values ('Girl at Lake - 4x6 Postcard', 'Postcard', 83, "This postcard is printed on 14pt standard glossy cardstock. It was illustrated by me and has a line dividing the address and note sections. It would be a great gift for any artist or pen-pal that loves creativity.", 'https://ibb.co/sjfRzQV', 1.75);
insert into products (name, type, store_quantity, description, img, price) values ('Happy Little Succulents - 4x6 Postcard', 'Postcard', 192, "This postcard is printed on 14pt standard matte cardstock. It was illustrated by me and has a line dividing the address and note sections. It would be a great gift for any artist or pen-pal that loves creativity.", 'https://ibb.co/pzZ0F8v', 1.75);
insert into products (name, type, store_quantity, description, img, price) values ('Bookshelf Bliss - 4x6 Postcard', 'Postcard', 43, "This postcard is printed on 14pt standard matte cardstock. It was illustrated by me and has a blank back. It would be a great gift for any artist or pen-pal that loves creativity.", 'https://ibb.co/3RVRcPK', 1.75);
insert into products (name, type, store_quantity, description, img, price) values ('Write Create Inspire - 4x6 Postcard', 'Postcard', 43, "This postcard is printed on 16pt premium matte cardstock. It was illustrated by Tanya Kart and designed by me. On the back it has a printed spot for the stamp placement, a line dividing the address and note sections. It would be a great gift for any artist or pen-pal that loves creativity.", 'https://ibb.co/3RVRcPK', 1.75);
insert into products (name, type, store_quantity, description, img, price) values ('Sticker Grab Bag', 'Grab Bag', 15, "This sticker grab bag includes four dishwasher-safe stickers from my 2020 Collection sticker designs. The postcards included in this pack are: Paint Your Reality, Write Your Own Story, Girl at Lake, Happy Little Succulents, Bookshelf Bliss, and Write Create Inspire. Images of these postcards can be found in their individual listings. It is a great way to purchase all of my postcards at a more affordable price. This would make a great gift for a pen-pal, friend, or anyone who loves to send happy mail.", 'https://ibb.co/S5KFCwV', 8.00);
insert into products (name, type, store_quantity, description, img, price) values ('Sticker Grab Bag', 'Grab Bag', 15, "This sticker grab bag includes four dishwasher-safe stickers from my 2020 Collection sticker designs. No two grab bags will contain the same stickers. Some of stickers themese are: spreading love, receiving happy mail, bookshelves, typewriters, snowglobes, and neuro-diversity butterflies. This would make a great gift for anyone who loves adding sticers to their laptops, journals, water bottles, etc. This is a great opportunity to great high-quality 3x3 inch stickers at a discounted price.", 'https://ibb.co/HqMcSRV', 5.00);