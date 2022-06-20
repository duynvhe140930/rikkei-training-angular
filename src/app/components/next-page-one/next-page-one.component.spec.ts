import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageOneComponent } from './next-page-one.component';

describe('NextPageOneComponent', () => {
  let component: NextPageOneComponent;
  let fixture: ComponentFixture<NextPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
