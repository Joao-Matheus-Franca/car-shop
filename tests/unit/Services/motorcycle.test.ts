import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/Motorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testes unitários da camada Service para rota de motos', function () {
  it('Deve criar uma moto com sucesso', async function () {
    const motortcycleInput: IMotorcycle = {
      model: 'Scooter',
      year: 2018,
      color: 'Vermelha',
      buyValue: 10000,
      category: 'street',
      engineCapacity: 400,
    };
    const motortcycleOutput: Motorcycle = new Motorcycle({
      id: 'idDoTeste',
      model: 'Scooter',
      year: 2018,
      color: 'Vermelha',
      buyValue: 10000,
      category: 'street',
      engineCapacity: 400,
    });
      
    sinon.stub(Model, 'create').resolves(motortcycleOutput);
    
    const motorcycleService = new MotorcycleService();

    const result = await motorcycleService.createNewMotorcycle(motortcycleInput);

    expect(result).to.be.deep.equal(motortcycleOutput);
  });
});