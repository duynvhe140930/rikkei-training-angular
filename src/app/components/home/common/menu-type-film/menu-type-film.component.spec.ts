import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTypeFilmComponent } from './menu-type-film.component';

describe('MenuTypeFilmComponent', () => {
  let component: MenuTypeFilmComponent;
  let fixture: ComponentFixture<MenuTypeFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTypeFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTypeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
