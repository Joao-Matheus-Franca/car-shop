import express from 'express';
import CarController from './Controllers/CarController';

const app = express();

app.use(express.json());

app.post('/cars', (req, res) => new CarController(req, res).createCar());

export default app;
