// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


app.use(cors({
  origin: 'http://localhost:4200'
}));
// create an instance of express to serve our end points

// Define la configuración de Swagger
const swaggerOptions = {
  
  definition: {
    openapi: '3.0.0',
   
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for eCommerce API',
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
    },
  ],
  apis: ['./src/app/routes/*.js'], 
};



const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Usa el middleware swagger-ui-express para servir la documentación generada
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// this is where we'll handle our various routes from
const routes = require('./src/app/routes/routes.js')(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});