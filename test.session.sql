
-- @block
CREATE TABLE Projects (
    id INT PRIMARY KEY,
    projectName VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);