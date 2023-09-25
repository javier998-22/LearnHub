import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosAPage } from './cursos-a.page';

describe('CursosAPage', () => {
  let component: CursosAPage;
  let fixture: ComponentFixture<CursosAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursosAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
