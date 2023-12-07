import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosNPage } from './alumnos-n.page';

describe('AlumnosNPage', () => {
  let component: AlumnosNPage;
  let fixture: ComponentFixture<AlumnosNPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnosNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
