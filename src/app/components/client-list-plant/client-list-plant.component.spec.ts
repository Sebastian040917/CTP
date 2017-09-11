import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListPlantComponent } from './client-list-plant.component';

describe('ClientListPlantComponent', () => {
  let component: ClientListPlantComponent;
  let fixture: ComponentFixture<ClientListPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
