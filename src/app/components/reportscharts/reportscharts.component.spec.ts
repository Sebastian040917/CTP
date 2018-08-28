import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportschartsComponent } from './reportscharts.component';

describe('ReportschartsComponent', () => {
  let component: ReportschartsComponent;
  let fixture: ComponentFixture<ReportschartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportschartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportschartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
