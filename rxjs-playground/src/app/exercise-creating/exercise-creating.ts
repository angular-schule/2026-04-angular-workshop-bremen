import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

import { HistoryWindow } from '../shared/history-window/history-window';

@Component({
  templateUrl: './exercise-creating.html',
  imports: [HistoryWindow]
})
export class ExerciseCreating {

  logStream$ = new ReplaySubject<unknown>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // const observable = of('🙂', '🥰', '😎');
    const observable = interval(1000);

    const observer = {
      next: (e: number) => this.log(e),
      error: (err: any) => this.log('ERROR' + err),
      complete: () => this.log('COMPLETE')
    };

    const subcription = observable.subscribe(observer);

    setTimeout(() => subcription.unsubscribe(),5000)

    // setTimeout(() => this.log('A'), 1000)
    // setTimeout(() => this.log('B'), 1100)


    /******************************/
  }

  log(msg: unknown) {
    this.logStream$.next(msg);
  }

}
