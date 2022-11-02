#!/bin/sh
mysql --password=test --user=root < ./sql_files/create.db.sql
mysql --password=test --user=root < ./sql_files/insert.db.sql