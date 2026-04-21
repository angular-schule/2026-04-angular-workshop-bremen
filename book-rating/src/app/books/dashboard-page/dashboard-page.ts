import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // bald default
})
export class DashboardPage {

  books = signal(['Angular', 'jQuery', 'React']);

  constructor() {
    setTimeout(() => this.books.update(b => [...b, 'Vue.js']), 2000)
  }
}
