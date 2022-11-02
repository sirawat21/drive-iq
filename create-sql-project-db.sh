#!/bin/sh
docker exec -it mysql /bin/sh -c "mysql --password=test --user=root < ./sql_files/create.db.sql"
docker exec -it mysql /bin/sh -c "mysql --password=test --user=root < ./sql_files/insert.db.sql"