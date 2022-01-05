const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carsSchema = new Schema({
  placa: { type: String, required: true },
  marca: { type: String, required: true },
  nombreConductor: { type: String, required: true },
  numeroCelular: { type: Number, required: true },
  fechaIngreso: { type: String, required: true },
  horaIngreso: { type: String, required: true },
  servicios: [
    {
      precioServicio: { type: Number, required: true },
      nombreServicio: { type: String, required: true },
      cantidad: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("carrosIngresadosYEliminados", carsSchema);
