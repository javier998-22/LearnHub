import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioEvPage } from './horario-ev.page';

describe('HorarioEvPage', () => {
  let component: HorarioEvPage;
  let fixture: ComponentFixture<HorarioEvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorarioEvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
