import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard-page';
import { BookRatingHelper } from '../shared/book-rating-helper';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage],

      // Der Klassiker:
      /*
      providers: [
        {
          provide: BookRatingHelper,
          useValue: {

          }
        }
      ]
      */
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should use BookRatingHelper.rateUp() to rate up a book', () => {

    const helper = TestBed.inject(BookRatingHelper);
    const spy = vi.spyOn(helper, 'rateUp');

    // console.log('*** VORHER ***', component.books());

    const testBook = component.books()[1];
    component.doRateUp(testBook);

    // console.log('*** NACHHER ***', component.books());

    expect(spy).toHaveBeenCalledExactlyOnceWith(testBook);

  });
});
