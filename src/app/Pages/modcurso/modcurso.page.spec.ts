import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModcursoPage } from './modcurso.page';

describe('ModcursoPage', () => {
  let component: ModcursoPage;
  let fixture: ComponentFixture<ModcursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
