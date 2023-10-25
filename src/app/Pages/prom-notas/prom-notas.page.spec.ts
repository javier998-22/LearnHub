import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromNotasPage } from './prom-notas.page';

describe('PromNotasPage', () => {
  let component: PromNotasPage;
  let fixture: ComponentFixture<PromNotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PromNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
