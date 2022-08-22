DROP DATABASE IF EXISTS `mysql-db`;

CREATE DATABASE `mysql-db`;

USE `mysql-db`;

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(20),
  `company` VARCHAR(20),
  `position` VARCHAR(20)
);