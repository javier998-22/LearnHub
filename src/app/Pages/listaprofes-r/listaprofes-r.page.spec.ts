import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaprofesRPage } from './listaprofes-r.page';

describe('ListaprofesRPage', () => {
  let component: ListaprofesRPage;
  let fixture: ComponentFixture<ListaprofesRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaprofesRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
