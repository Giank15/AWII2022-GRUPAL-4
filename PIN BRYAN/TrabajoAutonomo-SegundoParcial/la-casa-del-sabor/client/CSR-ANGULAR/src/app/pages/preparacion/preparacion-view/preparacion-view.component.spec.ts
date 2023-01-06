import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionViewComponent } from './preparacion-view.component';

describe('PreparacionViewComponent', () => {
  let component: PreparacionViewComponent;
  let fixture: ComponentFixture<PreparacionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
