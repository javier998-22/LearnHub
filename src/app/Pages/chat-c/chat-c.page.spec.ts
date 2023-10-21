import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatCPage } from './chat-c.page';

describe('ChatCPage', () => {
  let component: ChatCPage;
  let fixture: ComponentFixture<ChatCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
