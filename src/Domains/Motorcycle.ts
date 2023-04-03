import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = motorcycle.status;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getId() { return this.id; }

  public getModel() { return this.model; }

  public getYear() { return this.year; }

  public getColor() { return this.color; }

  public getStatus() { return this.status; }

  public getBuyValue() { return this.buyValue; }

  public getCategory() { return this.category; }

  public getEngineCapacity() { return this.engineCapacity; }

  public setId(id: string) { this.id = id; }

  public setModel(model: string) { this.model = model; }

  public setYear(year: number) { this.year = year; }

  public setColor(color: string) { this.color = color; }

  public setStatus(status: boolean) { this.status = status; }

  public setBuyValue(buyValue: number) { this.buyValue = buyValue; }

  public setCategory(category: string) { this.category = category; }

  public setengineCapacity(engineCapacity: number) { this.engineCapacity = engineCapacity; }
}

export default Motorcycle;
