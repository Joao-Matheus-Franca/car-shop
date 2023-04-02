import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createNewCar(car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.create(car);

    return this.createCarDomain(newCar);
  }

  public async findAllCars() {
    const carODM = new CarODM();

    const allCars = (await carODM.findAll()).map((e) => 
      this.createCarDomain(e));
    
    return allCars;
  }

  public async findCarById(id: string) {
    const carODM = new CarODM();

    const car = await carODM.findById(id);

    if (car) {
      return this.createCarDomain(car);
    }

    return car;
  }
}

export default CarService;