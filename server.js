const express = require("express");
const server = express();

const ProjectsRouter = require('./projects/projects-router');
const ActionsRouter = require('./actions/actions-router');

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);

module.exports = server;