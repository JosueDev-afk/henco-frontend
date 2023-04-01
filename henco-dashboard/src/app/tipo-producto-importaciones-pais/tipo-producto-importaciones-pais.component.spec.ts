import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProductoImportacionesPaisComponent } from './tipo-producto-importaciones-pais.component';

describe('TipoProductoImportacionesPaisComponent', () => {
  let component: TipoProductoImportacionesPaisComponent;
  let fixture: ComponentFixture<TipoProductoImportacionesPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoProductoImportacionesPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoProductoImportacionesPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
