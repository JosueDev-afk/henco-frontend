import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisasMasImportacionesComponent } from './paisas-mas-importaciones.component';

describe('PaisasMasImportacionesComponent', () => {
  let component: PaisasMasImportacionesComponent;
  let fixture: ComponentFixture<PaisasMasImportacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisasMasImportacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisasMasImportacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
