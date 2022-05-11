import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalListComponent } from './universal-list.component';

describe('UniversalListComponent', () => {
  let component: UniversalListComponent;
  let fixture: ComponentFixture<UniversalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
