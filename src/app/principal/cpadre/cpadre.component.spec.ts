import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpadreComponent } from './cpadre.component';

describe('CpadreComponent', () => {
  let component: CpadreComponent;
  let fixture: ComponentFixture<CpadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
