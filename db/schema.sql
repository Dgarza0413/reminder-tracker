DROP DATABASE IF EXISTS task_manager_db;
CREATE DATABASE task_manager_db;
USE task_manager_db;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL,
    task VARCHAR(30) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO tasks (task, completed)
VALUES ("take out the laundry", 0), ("meal prep", 1), ("clean room", 0);