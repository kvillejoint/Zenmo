CREATE DATABASE zenmo;
USE DATABASE zenmo;
CREATE TABLE users (
    id INT(11) AUTO_INCREMENT NOT NULL,
    email VARCHAR(100),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    current_value DECIMAL(13,4),
    logged_in TINYINT(1) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE transactions (
    id INT(11) AUTO_INCREMENT NOT NULL,
    email VARCHAR(100),
    transaction VARCHAR(50),
    value DECIMAL(13,4),
    target_user VARCHAR(50),
    PRIMARY KEY(id)
);