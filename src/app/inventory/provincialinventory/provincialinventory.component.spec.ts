import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialinventoryComponent } from './provincialinventory.component';

describe('ProvincialinventoryComponent', () => {
  let component: ProvincialinventoryComponent;
  let fixture: ComponentFixture<ProvincialinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvincialinventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvincialinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
