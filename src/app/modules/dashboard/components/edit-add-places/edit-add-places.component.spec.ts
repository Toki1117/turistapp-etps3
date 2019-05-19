import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPlacesComponent } from './edit-add-places.component';

describe('EditAddPlacesComponent', () => {
  let component: EditAddPlacesComponent;
  let fixture: ComponentFixture<EditAddPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
