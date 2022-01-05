const express = require("express");

const validate = require("../middlewares/validate");
const carsValidate = require("./cars.validate");
const carsService = require("./cars.service");

const router = express.Router();

router.post(
  "/registrarIngreso",
  validate(carsValidate.register),
  carsService.register
);

router.get("/cars", carsService.allCars);

router.post("/byPlaca", validate(carsValidate.byPlaca), carsService.byPlaca);

router.put("/update", validate(carsValidate.update), carsService.update);

router.delete("/delete", validate(carsValidate.delete), carsService.remove);

module.exports = router;
