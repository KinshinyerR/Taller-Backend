const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carsSchema = new Schema({
  placa: { type: String },
  marca: { type: String },
  nombreConductor: { type: String },
  numeroCelular: { type: Number },
  fechaIngreso: { type: String },
  horaIngreso: { type: String },
  servicios: [
    {
      precioServicio: { type: Number },
      nombreServicio: { type: String },
      precioRepuestos: { type: Number, required: true },
      nombreRepuestos: { type: String, required: true },
    },
  ],
  fechaSalida: { type: String },
  horaSalida: { type: String },
  total: Number,
});

module.exports = mongoose.model("carrosSalida", carsSchema);
