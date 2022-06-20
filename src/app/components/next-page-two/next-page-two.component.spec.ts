import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageTwoComponent } from './next-page-two.component';

describe('NextPageTwoComponent', () => {
  let component: NextPageTwoComponent;
  let fixture: ComponentFixture<NextPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
