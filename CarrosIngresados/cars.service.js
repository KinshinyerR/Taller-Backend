const Cars = require("./cars.model");
const CarsDelete = require("./cars.delete.model");

async function register(req, res) {
  const { placa } = req.body;
  try {
    const carsDB = await Cars.findOne({ placa });
    if (carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} ya se encuentra en el taller`
      );
    }
    const newCar = new Cars(req.body);
    await newCar.save();
    res.status(200).send(newCar);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

function allCars(req, res) {
  const { search } = req.query;
  const regex = new RegExp(search, "i");
  Cars.find(
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
  let total = 0;
  try {
    const carsDB = await Cars.findOne({ placa });
    if (!carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} NO se encuentra registrado`
      );
    }
    carsDB.servicios.map((ser) => {
      total = ser.precioServicio + ser.precioRepuestos + total;
    });
    res.status(200).send({ carsDB, total });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function update(req, res) {
  const { placa } = req.body;
  try {
    const carsDB = await Cars.findOne({ placa });
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
    const carsDB = await Cars.findOne({ placa });
    if (!carsDB) {
      throw new Error(
        `El vehiculo de placas: ${placa} NO se encuentra registrado`
      );
    }
    const newCar = new CarsDelete(req.body);
    await newCar.save();
    carsDB.remove({ placa });
    res
      .status(200)
      .send(`El vehiculo de placas: ${placa} fue eliminado con exito`);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { register, allCars, byPlaca, update, remove };
