import { isValidObjectId } from 'mongoose';
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

  public async findAllCars() {
    const allCars = await this.carService.findAllCars();

    return this.res.status(200).json(allCars);
  }

  public async findCarById() {
    const { params: { id } } = this.req;

    if (!isValidObjectId(id)) { 
      return this.res.status(422).json({ message: 'Invalid mongo id' }); 
    }

    const car = await this.carService.findCarById(id);

    if (car) { 
      return this.res.status(200).json(car); 
    }

    return this.res.status(404).json({ message: 'Car not found' });
  }

  public async updateOneCarById() {
    const { params: { id } } = this.req;
    const { body } = this.req;

    if (!isValidObjectId(id)) { 
      return this.res.status(422).json({ message: 'Invalid mongo id' }); 
    }
    
    const car = await this.carService.updateCarById(id, body);
    
    if (car) { 
      return this.res.status(200).json(car); 
    }

    return this.res.status(404).json({ message: 'Car not found' });
  }
}

export default CarController;