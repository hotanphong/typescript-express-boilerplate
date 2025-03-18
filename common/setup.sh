#!/bin/sh

NO_FORMAT="\033[0m"
C_DARKSEAGREEN3="\033[48;5;115m"

cd "$(dirname "$0")"

echo -e "${C_DARKSEAGREEN3}Pruning old configs${NO_FORMAT}"
rm -r ../.data
rm -r ../.env

echo -e "${C_DARKSEAGREEN3}Generating .env file${NO_FORMAT}"
cp .env.template ../.env

echo -e "${C_DARKSEAGREEN3}Installing dependencies${NO_FORMAT}"
cd ..
yarn install

echo -e "${C_DARKSEAGREEN3}Now you can edit your .env file and start coding${NO_FORMAT}"