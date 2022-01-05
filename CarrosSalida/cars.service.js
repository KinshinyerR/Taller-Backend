const CarsAdentro = require("../CarrosIngresados/cars.model");
const CarsSalida = require("./cars.model");

async function register(req, res) {
  const { placa } = req.body;
  try {
    const carsDB = await CarsAdentro.findOne({ placa });
    if (!carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} NO se encuentra en el taller`
      );
    }
    const newSalida = new CarsSalida(req.body);
    await newSalida.save();
    carsDB.remove({ placa });
    res.status(200).send(newSalida);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

function allCars(req, res) {
  const { search } = req.query;
  const regex = new RegExp(search, "i");
  CarsSalida.find(
    search
      ? {
          placa: { $regex: regex },
        }
      : {}
  )
    .then((cars) => {
      res.status(200).send(cars);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
}

async function byPlaca(req, res) {
  const { placa } = req.body;
  try {
    const carsDB = await CarsSalida.findOne({ placa });
    if (!carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} NO se encuentra registrado`
      );
    }
    res.status(200).send(carsDB);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function update(req, res) {
  const { placa } = req.body;
  try {
    const carsDB = await CarsSalida.findOne({ placa });
    if (!carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} NO se encuentra registrado`
      );
    }
    Object.assign(carsDB, req.body);
    carsDB.save();
    res.status(200).send(carsDB);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function remove(req, res) {
  const { placa } = req.body;
  try {
    const carsDB = await CarsSalida.findOne({ placa });
    if (!carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} NO se encuentra registrado`
      );
    }
    carsDB.remove({ placa });
    res
      .status(200)
      .send(`El vehiculo de placas: ${placa} fue eliminado con exito`);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { register, allCars, byPlaca, update, remove };
