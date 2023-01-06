import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaViewComponent } from './receta-view.component';

describe('RecetaViewComponent', () => {
  let component: RecetaViewComponent;
  let fixture: ComponentFixture<RecetaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
