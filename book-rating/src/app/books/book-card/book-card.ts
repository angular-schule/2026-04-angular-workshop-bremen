import { Component, input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {

  book = input.required<Book>();

  // statefull == echt schlecher Code
  /*
  _istBestesBuchDerWelt = false;

  ngOnInit() {
    if (this.book().title === 'Angular') {
      this._istBestesBuchDerWelt = true;
    }
  }*/
}
