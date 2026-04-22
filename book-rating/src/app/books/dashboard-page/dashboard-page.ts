import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // bald default
})
export class DashboardPage {

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

}
