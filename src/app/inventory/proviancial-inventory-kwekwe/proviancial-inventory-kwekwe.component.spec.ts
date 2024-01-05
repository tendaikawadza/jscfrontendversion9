import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviancialInventoryKwekweComponent } from './proviancial-inventory-kwekwe.component';

describe('ProviancialInventoryKwekweComponent', () => {
  let component: ProviancialInventoryKwekweComponent;
  let fixture: ComponentFixture<ProviancialInventoryKwekweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviancialInventoryKwekweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviancialInventoryKwekweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
