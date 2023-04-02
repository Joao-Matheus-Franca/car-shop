import express from 'express';
import CarController from './Controllers/CarController';

const app = express();

app.use(express.json());

app.post('/cars', (req, res) => new CarController(req, res).createCar());
app.get('/cars', (req, res) => new CarController(req, res).findAllCars());
app.get('/cars/:id', (req, res) => new CarController(req, res).findCarById());
app.put('/cars/:id', (req, res) => new CarController(req, res).updateOneCarById());

export default app;
