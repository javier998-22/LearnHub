import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosDelProfePage } from './cursos-del-profe.page';

describe('CursosDelProfePage', () => {
  let component: CursosDelProfePage;
  let fixture: ComponentFixture<CursosDelProfePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursosDelProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
