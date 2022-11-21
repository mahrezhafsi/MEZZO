import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuiComponent } from './acceui.component';

describe('AcceuiComponent', () => {
  let component: AcceuiComponent;
  let fixture: ComponentFixture<AcceuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
