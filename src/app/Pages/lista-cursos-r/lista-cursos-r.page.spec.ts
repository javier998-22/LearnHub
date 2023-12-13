import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCursosRPage } from './lista-cursos-r.page';

describe('ListaCursosRPage', () => {
  let component: ListaCursosRPage;
  let fixture: ComponentFixture<ListaCursosRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaCursosRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
