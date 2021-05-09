import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSideViewComponent } from './main-side-view.component';

describe('MainSideViewComponent', () => {
  let component: MainSideViewComponent;
  let fixture: ComponentFixture<MainSideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSideViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
