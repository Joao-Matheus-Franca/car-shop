import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Testes unitários da camada Service para rota de carros', function () {
  it('Deve criar um carro com sucesso', async function () {
    const carInput: ICar = {
      model: 'Camaro',
      year: 2011,
      color: 'Amarelo',
      buyValue: 50000,
      doorsQty: 2,
      seatsQty: 2,
    };
    const carOutput: Car = new Car({
      id: 'idDoTeste',
      model: 'Camaro',
      year: 2011,
      color: 'Amarelo',
      buyValue: 50000,
      doorsQty: 2,
      seatsQty: 2,
    });
      
    sinon.stub(Model, 'create').resolves(carOutput);
    
    const carService = new CarService();

    const result = await carService.createNewCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deve buscar todos os carros', async function () {
    const carOutput: Car = new Car({
      id: 'idDoTeste',
      model: 'Camaro',
      year: 2011,
      color: 'Amarelo',
      buyValue: 50000,
      doorsQty: 2,
      seatsQty: 2,
    });
      
    sinon.stub(Model, 'find').resolves([carOutput]);
    
    const carService = new CarService();

    const result = await carService.findAllCars();

    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deve buscar um carro pelo id', async function () {
    const carOutput: Car = new Car({
      id: 'idDoTeste',
      model: 'Camaro',
      year: 2011,
      color: 'Amarelo',
      buyValue: 50000,
      doorsQty: 2,
      seatsQty: 2,
    });
      
    sinon.stub(Model, 'findById').resolves(carOutput);
    
    const carService = new CarService();

    const result = await carService.findCarById('idDoTeste');

    expect(result).to.be.deep.equal(carOutput);
  });
});