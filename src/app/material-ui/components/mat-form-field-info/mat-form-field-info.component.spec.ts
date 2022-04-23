import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldInfoComponent } from './mat-form-field-info.component';

describe('MatFormFieldInfoComponent', () => {
  let component: MatFormFieldInfoComponent;
  let fixture: ComponentFixture<MatFormFieldInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormFieldInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormFieldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
