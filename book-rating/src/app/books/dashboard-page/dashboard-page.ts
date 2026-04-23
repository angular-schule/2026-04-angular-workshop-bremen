import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookCreate } from "../book-create/book-create";
import { BookStore } from '../shared/book-store';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard, BookCreate],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // bald default
})
export class DashboardPage {

  bookRatingHelper = inject(BookRatingHelper);
  bookStore = inject(BookStore);

  readonly books = signal<Book[]>([]);

  constructor() {
    this.bookStore.getBooks().subscribe(books => this.books.set(books))
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingHelper.rateDown(book);
    this.updateAndSortBook(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingHelper.rateUp(book)

    // const ratedBook = {
    //   ...book,
    //   rating: Math.max(book.rating - 1, 5)
    // }
    this.updateAndSortBook(ratedBook);
  }

  updateAndSortBook(ratedBook: Book) {

    this.books.update(books => books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating));

    /*
    const books = this.books();

    const newBooks = books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);

    this.books.set(newBooks);
    */
  }

  doCreateBook(newBook: Book) {
    this.books.update(books => [...books, newBook]
      .sort((a, b) => b.rating - a.rating)
    )
  }
}
