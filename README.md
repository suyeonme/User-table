# User-table
> Simple CRUD APIs for user table. I focus on understanding node.js

 ## Getting started
 ### 1. Clone repository
```git clone https://github.com/suyeonme/User-table.git```

### 2. Install npm packages
```npm install```

### 3. Create and setup .env file in root directory
```
PORT=3000
NODE_ENV=development

# SQL Server
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_DB_NAME
DB_CONNECTION_LIMIT=4
DB_HOST=127.0.0.1
```

### 4. Run and login Database with docker-compose
```
# Run db containers
docker-compose -f docker-compose.yml up -d

# Enter MySQL Container
docker exec -it [MY_SQL_CONTAINER] bash

# Login
mysql -u root -p
```

### 5. Run Express server
```
# Run Express server
npm run dev

# Run test suite
npm run test

# API Docs with Swagger
# http://localhost:3000/api-docs
```
---
## TODO
- [x] Simple CRUD APIs with MySQL
- [x] Validation and error handling
- [x] Caching with Redis
- [x] Logger
- [x] Testing
- [x] API Docs, Swagger
- [ ] Build a docker image

## MORE
- [ ] pagination, filter

## Troubleshooting
 - "OUTPUT" statement syntax error => MySQL doesn't support "output/returning" statement. So use "SELECT LAST_INSERT_ID()" instaed.
