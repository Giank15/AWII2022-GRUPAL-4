import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocineroIndexComponent } from './cocinero-index.component';

describe('CocineroIndexComponent', () => {
  let component: CocineroIndexComponent;
  let fixture: ComponentFixture<CocineroIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocineroIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocineroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
