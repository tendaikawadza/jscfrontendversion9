import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryictComponent } from './centralinventoryict.component';

describe('CentralinventoryictComponent', () => {
  let component: CentralinventoryictComponent;
  let fixture: ComponentFixture<CentralinventoryictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
