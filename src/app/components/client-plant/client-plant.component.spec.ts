import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPlantComponent } from './client-plant.component';

describe('ClientPlantComponent', () => {
  let component: ClientPlantComponent;
  let fixture: ComponentFixture<ClientPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
