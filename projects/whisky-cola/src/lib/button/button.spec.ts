import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcxButton } from './button';

describe('WcxButton', () => {
  let component: WcxButton;
  let fixture: ComponentFixture<WcxButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WcxButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcxButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
