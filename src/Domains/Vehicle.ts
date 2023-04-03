import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }

  public getId() { return this.id; }

  public getModel() { return this.model; }

  public getYear() { return this.year; }

  public getColor() { return this.color; }

  public getStatus() { return this.status; }

  public getBuyValue() { return this.buyValue; }

  public setId(id: string) { this.id = id; }

  public setModel(model: string) { this.model = model; }

  public setYear(year: number) { this.year = year; }

  public setColor(color: string) { this.color = color; }

  public setStatus(status: boolean) { this.status = status; }

  public setBuyValue(buyValue: number) { this.buyValue = buyValue; }
}

export default Vehicle;