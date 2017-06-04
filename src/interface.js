interface MogeInterface {
  getMoge(): ?string;
  setMoge(moge: ?string): void;
}

class Moge implements MogeInterface {
  moge: ?string;

  getMoge(): ?string {
    return this.moge;
  }

  setMoge(moge: ?string) {
    this.moge = moge;
  }
} // Works

class InvalidMoge implements MogeInterface {
  moge: ?string;

  getMoge(): ?string {
    return this.moge;
  }
} // Error

class Fuga {
  moge: MogeInterface;

  constructor(moge: MogeInterface) { // Type Hint!
    this.moge = moge;
  }

  printMoge() {
    console.log(this.moge.getMoge());
    console.log(this.moge.getInvalidMoge());
  }
}

const fuga = new Fuga(new Moge);

fuga.printMoge();
