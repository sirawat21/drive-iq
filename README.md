# Task 3 - SQL
## Description
Present the SQL Query sting which is able to show a broker name and the number of customers that belong to the broker. Also, the result needs to be sorted by the highest number of customers to the lowest if the same amount of customers, it will sort by alphabetically.
## Screenshot
![Result](https://i.imgur.com/S8olH0a.png)

The query string in the figure locates in file "src/query.db.sql".
## Usage
Most of commands base on `Docker` command
### STEP[1]
Start project container
```
   docker-compose up
```
Stop project container
```
   docker-compose down
```
### STEP[2]
Generating necessary data
!!! The command must run after all containers are built.
```
   ./generating-db.sh
```
### STEP[3]
Open web brower to access phpmyadmin
#### DBMS Detail (phpmyadmin) 
|   |  Detail |
|---|---|
| __Host__  | localhost  |
| __Port__  | 8080  |
| __Username__  | root  |
| __Password__  | test  |
| ___Database___| database_1 |
| __URL Access__  | localhost:8080  |

## Instructions
### Tasks:
- [x] Write an SQL query to generate a summary of how many customers are under a particular broker
- [x] The results should be sorted from high to low number of customers
- [x] If brokers have the same number of customers, then sort alphabetically
- [x] The result should list the broker name followed by the customer count

## References
- Docker CLI [sorce](https://docs.docker.com/engine/reference/commandline/cli/)
- Docker Compose [sorce](https://docs.docker.com/compose/gettingstarted/)
- MySQL 8.0 [sorce](https://dev.mysql.com/doc/refman/8.0/en/)
- PHP MyAdmin Container [sorce](https://hub.docker.com/r/phpmyadmin/phpmyadmin/)