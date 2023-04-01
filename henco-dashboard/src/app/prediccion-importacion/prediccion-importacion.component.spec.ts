import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediccionImportacionComponent } from './prediccion-importacion.component';

describe('PrediccionImportacionComponent', () => {
  let component: PrediccionImportacionComponent;
  let fixture: ComponentFixture<PrediccionImportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrediccionImportacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrediccionImportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
