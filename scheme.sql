CREATE DATABASE Library;
USE Library;

CREATE TABLE books( ISBN bigint PRIMARY, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT KEY, publication VARCHAR(300) NOT NULL, edition tinyint NOT NULL, ddc decimal(8,3) NOT KEY, rating decimal(2,1) NOT NULL);

INSERT INTO books(ISBN,title,author,publication,edition,ddc,rating)
VALUES
(9780198077053,"Business Communnication","Raman, Meenakshi","New Delhi Oxford University Press 2012",2,651.7,3.5),
(9788174466266,"Foundation of operating systems (a structural approach with UNIX)","Sharma , D . P","New Delhi Excel Books",NULL,5.268,4.0),
(9780198082163,"Unix and shell programming","Harwani , B . M","New Delhi Oxford University Press 2015",NULL,5.432,4.5),
(9788193404539,"Web programming and interactive technologies : web development","ScriptDemics","New Delhi Staredu Solutions",NULL,6.7,3.5),
