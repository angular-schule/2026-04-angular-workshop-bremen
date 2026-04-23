import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // bald default
})
export class DashboardPage {

  bookRatingHelper = inject(BookRatingHelper);

  // 🦆
  readonly books = signal<Book[]>([{
    isbn: '000',
    title: 'Angular',
    description: 'Bestes Buch der Welt',
    rating: 5
  }, {
    isbn: '111',
    title: 'jQuery',
    description: 'Altes Buch',
    rating: 3
  },{
    isbn: '222',
    title: 'React',
    description: 'Auch ganz nett',
    rating: 1
  }]);

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingHelper.rateDown(book);
    this.updateAndSortBook(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingHelper.rateUp(book)
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

}
