-- ###########################################################################
--                  CREATE DATABASE AND TABLES
-- ###########################################################################

-- ---------------------------------------------------------------------------
-- INITIALISE DATABBASE WITH CHARACTER SET AS UTF-8 UNICODE COLLATION
-- ---------------------------------------------------------------------------
CREATE DATABASE IF NOT EXISTS database_1
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE database_1;
SHOW TABLES;

-- ---------------------------------------------------------------------------
--  CUSTOMER TABLE
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS CUSTOMER (
    ID          INT             PRIMARY KEY AUTO_INCREMENT,
    NAME        VARCHAR(30),
    AMOUNT      INT(255),
    BROKER_ID   INT
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------------
--  BROKER TABLE
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS BROKER (
    ID          INT             PRIMARY KEY,
    NAME        VARCHAR(30)
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------------
-- ALTER TABLE FOR FOREIGN KEYS
-- ---------------------------------------------------------------------------
ALTER TABLE CUSTOMER
ADD FOREIGN KEY (BROKER_ID) REFERENCES BROKER(ID);