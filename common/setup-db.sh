#!/bin/sh

cd "$(dirname "$0")"

source ../.env

rm init.sql
touch init.sql

echo "create user $DB_USERNAME with password '$DB_PASSWORD';" >> init.sql
echo "create database ${DB_DATABASE}_development WITH OWNER=$DB_USERNAME;" >> init.sql
echo "create database ${DB_DATABASE}_staging WITH OWNER=$DB_USERNAME;" >> init.sql
echo "create database ${DB_DATABASE}_production WITH OWNER=$DB_USERNAME;" >> init.sql
echo "create database ${DB_DATABASE}_testing WITH OWNER=$DB_USERNAME;" >> init.sql
echo "create database ${DB_DATABASE}_jest WITH OWNER=$DB_USERNAME;" >> init.sql

echo "Done"
