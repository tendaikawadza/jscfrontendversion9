import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinvetorycategoryComponent } from './centralinvetorycategory.component';

describe('CentralinvetorycategoryComponent', () => {
  let component: CentralinvetorycategoryComponent;
  let fixture: ComponentFixture<CentralinvetorycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinvetorycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinvetorycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
