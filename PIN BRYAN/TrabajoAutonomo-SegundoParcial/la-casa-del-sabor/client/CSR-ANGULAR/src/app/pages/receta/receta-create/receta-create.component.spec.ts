import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaCreateComponent } from './receta-create.component';

describe('RecetaCreateComponent', () => {
  let component: RecetaCreateComponent;
  let fixture: ComponentFixture<RecetaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
