import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaIndexComponent } from './receta-index.component';

describe('RecetaIndexComponent', () => {
  let component: RecetaIndexComponent;
  let fixture: ComponentFixture<RecetaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
