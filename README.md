# WTF GRAPHQL Series

## Part I - Server
### Requirements
 - Docker 
     - https://docs.docker.com/docker-for-windows/install/
     - https://docs.docker.com/docker-for-mac/install/
     
 - NodeJS >= 10
     - https://nodejs.org/en/download/
     
 

### Start mongodb server
 - cd into the project
 - execute the command `docker-compose up`
 
### Start node app
 - cd into wtf_server
 - execute the comman `npm start`
 
 
### Development
  - install pm2 `npm install pm2 -g`
  - to start the `wtf_server` app use `npm run start:dev`
  
### Project structure
 - `mongodb` folder contains the data for the mongodb database
 - `wtf_server` contains the express app that serves the rest and graphql apis
 - `wtf_server/routes/api`  contains the apis code for this server, we will call this <API> from now on.
 - `<API>/models` contains the mongoose models used to perform operations on the mogodb database.
 - `<API>/rest` contains code for the rest api
 - `<API>/rest/swagger.yml` Rest api swagger file. You can see the content using the swagger ui started by docker-compose.
 - `<API>/graph` contains code for the graphql api