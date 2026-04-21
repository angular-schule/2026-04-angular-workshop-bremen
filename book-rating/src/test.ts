export class Test {

  constructor(private zahl: number) {
    console.log('Hallo Bremen! 🌊👷', this.zahl);
    this.#test();
  }

  #test() {
    console.log('Test wurde aufgerufen!');
  }
}
