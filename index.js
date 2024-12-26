// import json-server package
const jsonServer = require('json-server');
// create json server
const todoServer = jsonServer.create();
// create a connection to db.json file
const router = jsonServer.router('db.json');
// setup middleware to handle request and response
const middleware = jsonServer.defaults();
// use this middleware.
todoServer.use(middleware);
todoServer.use(router);
// start the server on port 3001
const port = 3001;
todoServer.listen(port, () => {
    console.log(`Todo Server is running at http://localhost:${port}`);
})