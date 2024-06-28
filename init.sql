-- create_database_and_scores_table.sql

CREATE DATABASE IF NOT EXISTS nest;

USE nest;

CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    playerName VARCHAR(255) NOT NULL,
    score INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO scores (playerName, score) VALUES ('Joe', 890);
