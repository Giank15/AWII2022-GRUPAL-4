import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocineroCreateComponent } from './cocinero-create.component';

describe('CocineroCreateComponent', () => {
  let component: CocineroCreateComponent;
  let fixture: ComponentFixture<CocineroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocineroCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocineroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
