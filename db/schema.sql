-- Data base Schema
CREATE DATABASE beatormatch_db;
USE beatormatch_db;

CREATE TABLE products(
id INT AUTO_INCREMENT NOT NULL,
category varchar (50),
upc varchar (255) NOT NULL,
product_name varchar(55) NOT NULL,
product_desc varchar(255) NOT NULL,
image varchar(255) NULL,
image2 varchar(255) NULL,
image3 varchar(255) NULL,
image4 varchar(255) NULL,
quantity INT (10) Null,
price DECIMAL(10,2),

createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);