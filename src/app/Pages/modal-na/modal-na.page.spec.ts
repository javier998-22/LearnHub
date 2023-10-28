import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalNAPage } from './modal-na.page';

describe('ModalNAPage', () => {
  let component: ModalNAPage;
  let fixture: ComponentFixture<ModalNAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalNAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
