import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionEditComponent } from './preparacion-edit.component';

describe('PreparacionEditComponent', () => {
  let component: PreparacionEditComponent;
  let fixture: ComponentFixture<PreparacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
