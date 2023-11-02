import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalGradesPage } from './modal-grades.page';

describe('ModalGradesPage', () => {
  let component: ModalGradesPage;
  let fixture: ComponentFixture<ModalGradesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalGradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
