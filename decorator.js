// Componente
class Cafe {
  custo() {
    return 5;
  }
}

// Decorator base
class CafeDecorator extends Cafe {
  constructor(cafe) {
    super();
    this.cafe = cafe;
  }

  custo() {
    return this.cafe.custo();
  }
}

// Decorator Concreto: Leite
class ComLeite extends CafeDecorator {
  custo() {
    return this.cafe.custo() + 1.5;
  }
}

// Decorator Concreto: Chantilly
class ComChantilly extends CafeDecorator {
  custo() {
    return this.cafe.custo() + 2;
  }
}

// Decorator Concreto: Chocolate
class ComChocolate extends CafeDecorator {
  custo() {
    return this.cafe.custo() + 2.5;
  }
}

// Uso
let meuCafe = new Cafe();
console.log("Custo apenas do café: ", meuCafe.custo());

meuCafe = new ComLeite(meuCafe);
console.log("Custo do café com leite: ", meuCafe.custo());

meuCafe = new ComChantilly(meuCafe);
console.log("Custo do café com leite e chantilly: ", meuCafe.custo());

meuCafe = new ComChocolate(meuCafe);
console.log(
  "Custo do café com leite, chantilly e chocolate: ",
  meuCafe.custo()
);
