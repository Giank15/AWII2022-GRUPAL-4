import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaEditComponent } from './receta-edit.component';

describe('RecetaEditComponent', () => {
  let component: RecetaEditComponent;
  let fixture: ComponentFixture<RecetaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
