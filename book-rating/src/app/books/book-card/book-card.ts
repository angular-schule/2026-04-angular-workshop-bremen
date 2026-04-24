import { Component, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {

  readonly book = input.required<Book>();

  readonly rateUp = output<Book>();
  readonly rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }



  // statefull == echt schlecher Code
  /*
  _istBestesBuchDerWelt = false;

  ngOnInit() {
    if (this.book().title === 'Angular') {
      this._istBestesBuchDerWelt = true;
    }
  }*/
}
