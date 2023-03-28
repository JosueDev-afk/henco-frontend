import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProductoExportacionesPaisComponent } from './tipo-producto-exportaciones-pais.component';

describe('TipoProductoExportacionesPaisComponent', () => {
  let component: TipoProductoExportacionesPaisComponent;
  let fixture: ComponentFixture<TipoProductoExportacionesPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoProductoExportacionesPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoProductoExportacionesPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
