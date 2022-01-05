require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const carsIngreso = require("./CarrosIngresados/cars.controller");
const carsSalida = require("./CarrosSalida/cars.controller");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/ingreso", carsIngreso);
app.use("/salida", carsSalida);

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${port}`);
    });
  })
  .catch((error) => console.error(error));
