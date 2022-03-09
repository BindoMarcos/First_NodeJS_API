CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE if not exists employees(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name varchar(45) default null,
    salary int(11) default null,
    primary key(id)
);

DESCRIBE employees; 