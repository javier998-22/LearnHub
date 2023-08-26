import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCursoPage } from './form-curso.page';

describe('FormCursoPage', () => {
  let component: FormCursoPage;
  let fixture: ComponentFixture<FormCursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
