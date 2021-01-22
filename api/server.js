const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here

const PostRouter = require('./posts/posts-router.js');

const UserRouter = require('./users/users-router.js');

server.use(express.json());

server.use('/api/posts', PostRouter);
server.use('/api/posts/:id', PostRouter);
server.use('/api/users/', UserRouter);
server.use('/api/users/:id', UserRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
