require("dotenv").config();

const server = require("./server");

const port = process.env.PORT;

server.listen(4000, () => {
  console.log(`\n* Server Running on http://localhost:4000 *\n`);
});
