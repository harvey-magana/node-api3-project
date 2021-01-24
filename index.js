// require your server and start it
const server = require('./api/server.js');

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`\n*** server listening on port ${PORT} ***\n`);
});

// server.js connected to index.js

// routers connected to server.js

// models connected to routers 

// db connected to models
// model functions exported

// middleware: 
// make sure to export the middleware functions from the middleware file in the following format
// module.exports = {
//    middlewarefunctionname,
// };
// then, desctructure the call in the server file  as follows 
// const { middlewarefunctionname } = require("../users/middlewarefile.js");