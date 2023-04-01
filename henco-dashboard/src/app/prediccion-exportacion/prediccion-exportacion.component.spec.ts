import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediccionExportacionComponent } from './prediccion-exportacion.component';

describe('PrediccionExportacionComponent', () => {
  let component: PrediccionExportacionComponent;
  let fixture: ComponentFixture<PrediccionExportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrediccionExportacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrediccionExportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
