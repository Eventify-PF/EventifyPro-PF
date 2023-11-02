const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const SERVER_PORT   =  3001;

conn.sync({ force: false }).then(() => {
  server.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port: ${SERVER_PORT}`);
  });
});
