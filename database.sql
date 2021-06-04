-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


--DB CREATE--

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity INT NOT NULL,
	unit VARCHAR(20),
	purchased BOOLEAN DEFAULT FALSE
);

INSERT INTO list (name, quantity, unit)
VALUES ('Bread', 1, 'loaf'),
('Milk', 2, 'gallon');

SELECT * FROM "list";