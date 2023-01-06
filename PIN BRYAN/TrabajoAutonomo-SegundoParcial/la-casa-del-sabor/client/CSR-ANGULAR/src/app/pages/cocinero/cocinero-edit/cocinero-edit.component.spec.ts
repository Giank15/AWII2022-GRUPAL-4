import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocineroEditComponent } from './cocinero-edit.component';

describe('CocineroEditComponent', () => {
  let component: CocineroEditComponent;
  let fixture: ComponentFixture<CocineroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocineroEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocineroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
