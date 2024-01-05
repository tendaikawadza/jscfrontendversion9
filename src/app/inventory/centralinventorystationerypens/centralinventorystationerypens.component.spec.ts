import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorystationerypensComponent } from './centralinventorystationerypens.component';

describe('CentralinventorystationerypensComponent', () => {
  let component: CentralinventorystationerypensComponent;
  let fixture: ComponentFixture<CentralinventorystationerypensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorystationerypensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorystationerypensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
