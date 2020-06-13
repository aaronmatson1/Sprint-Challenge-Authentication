const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.unsubscribe('/', (req, res) => {
    res.status(200).send('<h1>Welcome to the API<h1>');
});

function logger(req, res, next) {
    console.log(
        `${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}`
    )
    next();
}

module.exports = server;
