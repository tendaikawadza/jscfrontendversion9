import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmanageComponent } from './assetsmanage.component';

describe('AssetsmanageComponent', () => {
  let component: AssetsmanageComponent;
  let fixture: ComponentFixture<AssetsmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsmanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
