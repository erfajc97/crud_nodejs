const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const todoRoutes = require("./routes/todo.routes")

const port = 3007;

db.authenticate()
  .then(() => {
    console.log("Conexcion a base de datos ok");
  })
  .catch((error) => {
    console.log(error);
  });

db.sync()
  .then(() => {
    console.log("DB corriendo y sincronizada");
  })
  .catch((error) => console.log(error));

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use( "/api/v1", todoRoutes);

app.listen(port, () => {
  console.log(`Estoy escuchando en el puerto ${port}`);
});
