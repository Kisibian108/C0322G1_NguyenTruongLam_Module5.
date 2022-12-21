import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingCreateComponent } from './trading-create.component';

describe('TradingCreateComponent', () => {
  let component: TradingCreateComponent;
  let fixture: ComponentFixture<TradingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
