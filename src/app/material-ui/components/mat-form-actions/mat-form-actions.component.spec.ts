import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormActionsComponent } from './mat-form-actions.component';

describe('MatFormActionsComponent', () => {
  let component: MatFormActionsComponent;
  let fixture: ComponentFixture<MatFormActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
