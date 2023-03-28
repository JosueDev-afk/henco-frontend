import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesMasExportacionesComponent } from './paises-mas-exportaciones.component';

describe('PaisesMasExportacionesComponent', () => {
  let component: PaisesMasExportacionesComponent;
  let fixture: ComponentFixture<PaisesMasExportacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesMasExportacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesMasExportacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
