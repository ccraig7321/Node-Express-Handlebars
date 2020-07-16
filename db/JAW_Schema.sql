USE qjz71mm9kavbc52r;

-- Create the table tasks.
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(60) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

 -- 
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheeseburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacnon Burger", TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Hamburger", FALSE);