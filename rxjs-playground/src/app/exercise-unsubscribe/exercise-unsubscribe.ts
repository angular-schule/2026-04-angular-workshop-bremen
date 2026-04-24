import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap, timer } from 'rxjs';

@Component({
  templateUrl: './exercise-unsubscribe.html',
})
export class ExerciseUnsubscribe {

  interval = toSignal(
    timer(0, 1000).pipe(
      tap(console.log)
    ));
}
