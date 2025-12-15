class Player {
  name: string;
  number: number;
  //private access specifier
  #wages = 100;
  readonly tickets: number = 4; //readOnly means the property can only be assigned once and then cannot be changed
  constructor(name: string, number: number) {
    this.name = name;
    console.log(this);
    this.number = number;
    console.log(this);
  }
}
const Haaland = new Player("Haaland", 9);

//Access Modifiers
class Teams {
  public name: string = "Manchaster City";

  private Injured = "Players";
  reveal() {
    return this.Injured;
  }
  protected Staff = "Ahston Kit";
}
class Branch extends Teams {
  static BranchName = "Manchaster";

  getName() {
    return this.Staff;
  }
}

class ManchasterCity {
  private _player = 1; //it is generally good syntax to put an underscore before a private variable
  get player() {
    return this._player;
  }
  set player(value: number) {
    if (value > 12) throw new Error("Too many Players");
    this._player = value;
  }
}

const ManCity = new ManchasterCity();
ManCity.player = 5;
abstract class Animal {
  abstract makeSound(): void; // abstract method

  move(): void {
    // concrete method
    console.log("Animal is moving");
  }
}
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}
