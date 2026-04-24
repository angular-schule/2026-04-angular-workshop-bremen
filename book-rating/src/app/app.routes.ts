import { Routes } from '@angular/router';
import { DashboardPage } from './books/dashboard-page/dashboard-page';
import { BookDetailsPage } from './books/book-details-page/book-details-page';

export const routes: Routes = [

  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: DashboardPage, title: 'Dashboard' },
  { path: 'books/:isbn', component: BookDetailsPage, title: 'Book Details' },
  // { path: '**', component: NotFoundPage },
];


// http://localhost:4200/ --> leere Seite
// http://localhost:4200/books --> Dashboard
// http://localhost:4200/books/123 --> Detail Seite



