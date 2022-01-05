const { body } = require("express-validator");

const carsValidate = {
  register: [
    body("placa").exists().isString().trim().withMessage("Placa invalida"),
    body("marca").exists().isString().trim().withMessage("Marca invalida"),
    body("nombreConductor")
      .exists()
      .isString()
      .trim()
      .withMessage("Nombre del conductor invalido"),
    body("numeroCelular")
      .exists()
      .isNumeric()
      .trim()
      .withMessage("Número de celular invalido"),
    body("fechaIngreso")
      .exists()
      .isString()
      .trim()
      .withMessage("Fecha invalida"),
    body("horaIngreso").exists().isString().trim().withMessage("Hora invalida"),
    body("fechaSalida")
      .exists()
      .isString()
      .trim()
      .withMessage("Fecha invalida"),
    body("horaSalida").exists().isString().trim().withMessage("Hora invalida"),
    body("total").exists().isNumeric().trim().withMessage("Total invalido"),
  ],
  byPlaca: [
    body("placa").exists().isString().trim().withMessage("Placa invalida"),
  ],
  update: [
    body("placa").exists().isString().trim().withMessage("Placa invalida"),
    body("marca").exists().isString().trim().withMessage("Marca invalida"),
    body("nombreConductor")
      .exists()
      .isString()
      .trim()
      .withMessage("Nombre del conductor invalido"),
    body("numeroCelular")
      .exists()
      .isNumeric()
      .trim()
      .withMessage("Número de celular invalido"),
    body("fechaIngreso")
      .exists()
      .isString()
      .trim()
      .withMessage("Fecha invalida"),
    body("horaIngreso").exists().isString().trim().withMessage("Hora invalida"),
    body("fechaSalida")
      .exists()
      .isString()
      .trim()
      .withMessage("Fecha invalida"),
    body("horaSalida").exists().isString().trim().withMessage("Hora invalida"),
    body("total").exists().isNumeric().trim().withMessage("Total invalido"),
  ],
  delete: [
    body("placa").exists().isString().trim().withMessage("Placa invalida"),
  ],
};

module.exports = carsValidate;
