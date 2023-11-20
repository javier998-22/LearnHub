import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerevPage } from './verev.page';

describe('VerevPage', () => {
  let component: VerevPage;
  let fixture: ComponentFixture<VerevPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
