import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LisCursosPage } from './lis-cursos.page';

describe('LisCursosPage', () => {
  let component: LisCursosPage;
  let fixture: ComponentFixture<LisCursosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LisCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
