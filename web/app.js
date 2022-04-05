'use strict';

const postgres_user = process.env.POSTGRESQL_USER
const postgres_port = process.env.POSTGRES_PORT
const postgres_passwd = process.env.POSTGRESQL_PASSWORD

const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres_user:postgres_password@db:postgres_port')

// Constants
const PORT = 11440;
const HOST = '0.0.0.0';
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Web Technology Final Submission 11440",
            version: "1.0",
            description:
                "This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service",
            contact: {
                name: "11440",
                email: "00011440@wiut.uz",
            },
        },
        servers: [
            {
                url: "http://localhost:11440/",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);


// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/students/', (req, res) => {
    res.send(db.one('SELECT $1 AS value', 123)
        .then((data) => {
            console.log('DATA:', data.value)
        })
        .catch((error) => {
            console.log('ERROR:', error)
        }));
});

app.use('/api/', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);