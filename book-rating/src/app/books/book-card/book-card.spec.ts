import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCard } from './book-card';
import { inputBinding } from '@angular/core';
import { Book } from '../shared/book';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCard],
    }).compileComponents();

    const book = {} as Book;

    fixture = TestBed.createComponent(BookCard, {
      bindings: [
        inputBinding('book', () => book)
      ]
    });
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
