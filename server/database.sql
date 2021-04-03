CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    todo_name VARCHAR(255),
    todo_desc VARCHAR(255)
);