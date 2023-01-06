import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionCreateComponent } from './preparacion-create.component';

describe('PreparacionCreateComponent', () => {
  let component: PreparacionCreateComponent;
  let fixture: ComponentFixture<PreparacionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
