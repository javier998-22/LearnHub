import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosChatPage } from './usuarios-chat.page';

describe('UsuariosChatPage', () => {
  let component: UsuariosChatPage;
  let fixture: ComponentFixture<UsuariosChatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariosChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
