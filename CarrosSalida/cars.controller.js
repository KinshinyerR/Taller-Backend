const express = require("express");

const validate = require("../middlewares/validate");
const carsValidate = require("./cars.validate");
const carsService = require("./cars.service");

const router = express.Router();

router.post(
  "/registrarSalida",
  validate(carsValidate.register),
  carsService.register
);

router.get("/allServices", carsService.allCars);

router.get("/byPlaca", validate(carsValidate.byPlaca), carsService.byPlaca);

router.put("update", validate(carsValidate.update), carsService.update);

router.put("delete", validate(carsValidate.delete), carsService.remove);

module.exports = router;
