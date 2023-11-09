import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirevPage } from './subirev.page';

describe('SubirevPage', () => {
  let component: SubirevPage;
  let fixture: ComponentFixture<SubirevPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubirevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
