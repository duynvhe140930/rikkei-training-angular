import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFilmComponent } from './type-film.component';

describe('TypeFilmComponent', () => {
  let component: TypeFilmComponent;
  let fixture: ComponentFixture<TypeFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
