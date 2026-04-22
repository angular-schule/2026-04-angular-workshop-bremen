import { Injectable } from '@angular/core';
import { Book } from './book';

// Demnächst: @Service()
@Injectable({
  providedIn: 'root',
})
export class BookRatingHelper {

  rateUp(book: Book): Book {
    return book; // TODO
  }

  rateDown(book: Book): Book {
    return book; // TODO
  }

}
