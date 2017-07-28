DROP DATABASE IF EXISTS Users;
CREATE DATABASE Users;

USE Users;

DROP TABLE IF EXISTS Zenmo_Users;

CREATE TABLE Zenmo_Users (
username varchar(30),
password varchar(30),
first_name varchar(60),
last_name varchar(60),
phone varchar(10),
address varchar(60),
email varchar (60),
balance decimal(10,4),
confirmation_code integer(30)
);
