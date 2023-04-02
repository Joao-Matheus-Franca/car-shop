import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private carService: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.carService = new CarService();
  }

  public async createCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty, 
    };

    const newCar = await this.carService.createNewCar(car);

    return this.res.status(201).json(newCar);
  }
}

export default CarController;