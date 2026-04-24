import { httpResource } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { Book } from '../shared/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss',
})
export class BookDetailsPage {

  readonly isbn = input.required<string>();
  readonly book = httpResource<Book>(
    () => `https://api.angular.schule/books/${this.isbn()}`
  )
}
