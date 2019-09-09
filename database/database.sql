CREATE DATABASE ng_product_db;

USE ng_product_db;

CREATE TABLE product (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50),
  name VARCHAR(100),
  description VARCHAR(255),
  image VARCHAR(250),
  create_at TIMESTAMP DEFAULT CURRENT_TIME,
  update_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

DESC product;

CREATE TABLE user (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  displayName VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(250),
  image VARCHAR(250),
  create_at TIMESTAMP DEFAULT CURRENT_TIME,
  update_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

DESC user;