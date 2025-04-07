CREATE DATABASE IF NOT EXISTS inputan_db;
USE inputan_db;

CREATE TABLE IF NOT EXISTS pengguna_login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Contoh data
INSERT INTO pengguna_login (username, password) VALUES ('admin', '1234');
