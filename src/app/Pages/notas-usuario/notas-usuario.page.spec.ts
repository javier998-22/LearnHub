import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotasUsuarioPage } from './notas-usuario.page';

describe('NotasUsuarioPage', () => {
  let component: NotasUsuarioPage;
  let fixture: ComponentFixture<NotasUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotasUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
