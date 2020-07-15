-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(60) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);