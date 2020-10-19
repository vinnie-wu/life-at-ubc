# Life @ UBC

### Installation (if you don't have these already)
- Node from https://nodejs.org/en/
- Git https://git-scm.com/downloads
- VS Code (Optional) https://code.visualstudio.com/

#### Client
- `cd client`
- `npm install` to install all dependencies 
- `npm start` to build & start the React app

#### Server
- `cd server`
- `npm install` in the root directory to install all dependencies
- `npm start` to start the Node.js server

#### Database (Local Setup while we don't have Docker)

##### Installation
- Install PostgreSQL 12.4 (untick pgAdmin installation, we'll install this separately) https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- pgAdmin version 4.27 release https://www.pgadmin.org/download/

##### Local Database Setup
- open `pgAdmin` -> `PostgreSQL 12` -> `Databases`
- Right click `Databases` and `Create` -> `Database`
- name:`'postgres'`, owner: `'postgres'`, password: `123456` (This is the current hard coded config defined in server file)
- If setup correctly you should see the following when running npm start in server:
 
![Alt text](./pgconnected.png)
