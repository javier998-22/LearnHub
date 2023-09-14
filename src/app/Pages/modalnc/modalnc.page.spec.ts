import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalncPage } from './modalnc.page';

describe('ModalncPage', () => {
  let component: ModalncPage;
  let fixture: ComponentFixture<ModalncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
