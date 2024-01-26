import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSelectorComponent } from './movie-selector.component';

describe('MovieListComponent', () => {
  let component: MovieSelectorComponent;
  let fixture: ComponentFixture<MovieSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
