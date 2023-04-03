import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createNewMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();

    const newMotorcycle = await motorcycleODM.create(motorcycle);

    return this.createMotorcycleDomain(newMotorcycle);
  }
}

export default MotorcycleService;