DROP DATABASE IF EXISTS `mysql-db`;

CREATE DATABASE `mysql-db`;

USE `mysql-db`;

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(20),
  `company` VARCHAR(20),
  `position` VARCHAR(20)
);