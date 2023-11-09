import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosalPage } from './cursosal.page';

describe('CursosalPage', () => {
  let component: CursosalPage;
  let fixture: ComponentFixture<CursosalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursosalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
