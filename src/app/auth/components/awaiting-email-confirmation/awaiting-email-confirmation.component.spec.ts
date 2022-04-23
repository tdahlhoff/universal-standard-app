import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingEmailConfirmationComponent } from './awaiting-email-confirmation.component';

describe('AwaitingEmailConfirmationComponent', () => {
  let component: AwaitingEmailConfirmationComponent;
  let fixture: ComponentFixture<AwaitingEmailConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaitingEmailConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingEmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
