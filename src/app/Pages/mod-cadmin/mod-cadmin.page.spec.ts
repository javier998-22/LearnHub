import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModCadminPage } from './mod-cadmin.page';

describe('ModCadminPage', () => {
  let component: ModCadminPage;
  let fixture: ComponentFixture<ModCadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModCadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
