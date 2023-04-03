import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
}

export default AbstractODM;