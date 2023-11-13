import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisnotasModalPage } from './misnotas-modal.page';

describe('MisnotasModalPage', () => {
  let component: MisnotasModalPage;
  let fixture: ComponentFixture<MisnotasModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisnotasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
