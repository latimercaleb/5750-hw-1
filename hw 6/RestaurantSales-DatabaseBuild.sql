-- =========================================================
-- RestaurantSales-DatabaseBuild
--   This script builds the dbRestaurantSales database and its tables.
-- It also inserts data into the tables.
-- =========================================================

-- -----------------------------------------------------
-- Save selected MySQL settings
-- -----------------------------------------------------
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Delete and create database
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dbRestaurantSales` ;
CREATE SCHEMA IF NOT EXISTS `dbRestaurantSales` DEFAULT CHARACTER SET utf8 ;

-- -----------------------------------------------------
-- Switch to dbRestaurantSales database
-- -----------------------------------------------------
USE `dbRestaurantSales` ;

-- -----------------------------------------------------
-- Delete and create table `dbRestaurantSales`.`tbSales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbRestaurantSales`.`tbSales` ;

CREATE TABLE IF NOT EXISTS `dbRestaurantSales`.`tbSales` (
  `saleID` INT NOT NULL,
  `entreeIndex` INT NOT NULL DEFAULT 0,
  `drinkIndex` INT NOT NULL DEFAULT 0,
  `tipPercentage` INT NOT NULL DEFAULT 15,
  PRIMARY KEY (`saleID`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Insert data into table `dbRestaurantSales`.`tbSales`
-- -----------------------------------------------------
DELETE FROM tbSales;
INSERT INTO tbSales (saleID, entreeIndex, drinkIndex, tipPercentage)
  VALUES
    (1001,	1, 1, 10),
    (1002,	1, 2, 15),
    (1003,	2, 1, 20),
    (1004,	2, 2, 25);

-- -----------------------------------------------------
-- Query data from table `dbRestaurantSales`.`tbSales`
-- -----------------------------------------------------
SELECT * FROM tbSales;

-- -----------------------------------------------------
-- Delete and create table `dbRestaurantSales`.`tbStatus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbRestaurantSales`.`tbStatus` ;

CREATE TABLE IF NOT EXISTS `dbRestaurantSales`.`tbStatus` (
  `saleID` INT NOT NULL DEFAULT 1000,
  `saleCount` INT NOT NULL DEFAULT 0,
  `salePtr` INT NOT NULL DEFAULT 0)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Insert data into table `dbRestaurantSales`.`tbSales`
-- -----------------------------------------------------
DELETE FROM tbStatus;
INSERT INTO tbStatus (saleID, saleCount, salePtr)
  VALUES (1004,	4, 0);

-- -----------------------------------------------------
-- Query data from table `dbRestaurantSales`.`tbStatus`
-- -----------------------------------------------------
SELECT * FROM tbStatus;

-- -----------------------------------------------------
-- Restore saved MySQL settings
-- -----------------------------------------------------
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
