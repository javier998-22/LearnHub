import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioClasesPage } from './horario-clases.page';

describe('HorarioClasesPage', () => {
  let component: HorarioClasesPage;
  let fixture: ComponentFixture<HorarioClasesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorarioClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
