import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private motorcycleService: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.motorcycleService = new MotorcycleService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity, 
    };

    const newMotorcycle = await this.motorcycleService.createNewMotorcycle(motorcycle);
    
    return this.res.status(201).json(newMotorcycle);
  }
}

export default MotorcycleController;