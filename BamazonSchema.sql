DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255),
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(10) DEFAULT 0,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("laptop","electronics", 1200.00 , 10),
("sound bar","electronics", 500 , 25),
("smart tv 65in","electronics", 800 , 10),
("Nintendo Switch","electronics", 350 , 50),
("toothpaste","personal care", 3.25 , 100),
("liquid soap","personal care", 4 , 1000),
("body lotion","personal care", 3.5 , 2500),
("Uno Card Game","entertainment", 10 , 750),
("The Game of Life","entertainment", 12.99, 250),
("Cards Against Humanity","entertainment",21.99, 200);

SELECT * FROM products;
