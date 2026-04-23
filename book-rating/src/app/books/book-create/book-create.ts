import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, max, maxLength, min, minLength, required, validate } from '@angular/forms/signals';

import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [FormField, FormRoot],
  templateUrl: './book-create.html',
  styleUrl: './book-create.scss',
})
export class BookCreate {

  // Datenmodell
  protected readonly bookData = signal<Book>({
    isbn: '',
    title: '',
    description: '',
    rating: 1
  });

  // Formularmodell (FieldTree)
  protected readonly bookForm = form(this.bookData, path => {

    required(path.isbn, { message: 'Die ISBN muss angegeben werden.'});
    required(path.title, { message: 'Der Titel muss angegeben werden.'});
    required(path.rating, { message: 'Das Rating muss angegeben werden.'});

    minLength(path.isbn, 8, { message: 'Die ISBN muss min. 8 Zeichen lang sein.' });
    maxLength(path.isbn, 15, { message: 'Die ISBN darf max. 15 Zeichen lang sein.' });

    min(path.rating, 1, { message: 'Die Bewertung muss min. 1 sein.' });
    max(path.rating, 5, { message: 'Die Bewertung muss max. 5 sein.' });

    // custom validator
    validate(path.isbn, ctx => {
      if(!ctx.value().startsWith('978')) {
        return {
          kind: 'isbnPrefix',
          message: 'Eine ISBN muss mit 978 beginnen'
        }
      }
      return undefined;
    })
  }, {
    submission: {
      action: async (f) => {
        console.log('Das Formular wurde abgesendet!')
      }
    }
  });
}
