// Estratégia de Envio
class ShippingStrategy {
  calculate(data) {
    throw new Error("Este método deve ser sobrescrito");
  }
}

// Estratégia Concreta: Correios
class CorreiosStrategy extends ShippingStrategy {
  calculate(data) {
    return `R$ ${data.weight * 1.5 + 10}`;
  }
}

// Estratégia Concreta: FedEx
class FedExStrategy extends ShippingStrategy {
  calculate(data) {
    return `R$ ${data.weight * 2.0 + 20}`;
  }
}

// Estratégia Concreta: UPS
class UPSStrategy extends ShippingStrategy {
  calculate(data) {
    return `R$ ${data.weight * 1.8 + 15}`;
  }
}

// Contexto
class Shipping {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculateCost(data) {
    return this.strategy.calculate(data);
  }
}

// Uso
const data = { weight: 10 }; // Pacote com peso 10
const shipping = new Shipping(new CorreiosStrategy());
console.log("Custo Correios:", shipping.calculateCost(data));

shipping.setStrategy(new FedExStrategy());
console.log("Custo FedEx:", shipping.calculateCost(data));

shipping.setStrategy(new UPSStrategy());
console.log("Custo UPS:", shipping.calculateCost(data));
