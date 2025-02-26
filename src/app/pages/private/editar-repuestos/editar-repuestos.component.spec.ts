import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRepuestosComponent } from './editar-repuestos.component';

describe('EditarRepuestosComponent', () => {
  let component: EditarRepuestosComponent;
  let fixture: ComponentFixture<EditarRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRepuestosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
