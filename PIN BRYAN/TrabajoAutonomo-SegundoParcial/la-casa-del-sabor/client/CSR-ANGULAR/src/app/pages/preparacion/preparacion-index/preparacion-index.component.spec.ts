import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionIndexComponent } from './preparacion-index.component';

describe('PreparacionIndexComponent', () => {
  let component: PreparacionIndexComponent;
  let fixture: ComponentFixture<PreparacionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
