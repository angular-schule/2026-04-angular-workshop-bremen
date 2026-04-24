import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStore } from '../shared/book-store';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { catchError, concatMap, map, mergeMap, of, retry, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss',
})
export class BookDetailsPage {

  // Buch laden mit RxJS

  router = inject(ActivatedRoute);
  bookStore = inject(BookStore);

  book2 = toSignal(this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bookStore.getSingle(isbn).pipe(
      retry({
        count: 2,
        delay: 500
      }),
      catchError((err: HttpErrorResponse) => of({
        isbn: '000',
        title: 'Error',
        description: err.message
      }))
    )),
  ))

  // Buch laden mit httpResource
  readonly isbn = input.required<string>();
  readonly book = httpResource<Book>(
    () => `https://api.angular.schule/books/${this.isbn()}`
  )
}
