# Instruction

## First Run

- Run `yarn setup:env` to create .env file and install all dependencies.
- If you use your own psql instance, edit psql credentials ín .env
- If you are using my psql from compose, follow these steps:
  - Make sure your computer has docker installed.
  - Run `yarn setup:database` to initialize database init file (Note: You can edit username, password, and database name inside .env)
  - Run `yarn run:database` to start database.