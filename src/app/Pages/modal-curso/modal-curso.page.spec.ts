import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCursoPage } from './modal-curso.page';

describe('ModalCursoPage', () => {
  let component: ModalCursoPage;
  let fixture: ComponentFixture<ModalCursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
