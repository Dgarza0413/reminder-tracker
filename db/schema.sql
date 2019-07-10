DROP DATABASE IF EXISTS task_manager_db
CREATE DATABASE task_manager_db
USE task_manager_db

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL,
    task VARCHAR(30) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
)