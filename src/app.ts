import express from 'express';
import CarController from './Controllers/CarController';
import MotorcycleController from './Controllers/MotorcycleController';

const app = express();

app.use(express.json());

app.post('/cars', (req, res) => new CarController(req, res).createCar());
app.get('/cars', (req, res) => new CarController(req, res).findAllCars());
app.get('/cars/:id', (req, res) => new CarController(req, res).findCarById());
app.put('/cars/:id', (req, res) => new CarController(req, res).updateOneCarById());

app.post('/motorcycles', (req, res) => new MotorcycleController(req, res).createMotorcycle());

export default app;
