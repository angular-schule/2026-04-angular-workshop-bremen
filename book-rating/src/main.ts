import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));




class Test {

  constructor(zahl: number) {
    console.log('Hallo Bremen! 🌊👷', zahl);
    this.#test();
  }

  #test() {
    console.log('Test wurde aufgerufen!');
  }
}

const test = new Test(42);

