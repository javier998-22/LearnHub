import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModPerfilPage } from './mod-perfil.page';
import { IonicModule } from '@ionic/angular';

describe('ModPerfilPage', () => {
  let component: ModPerfilPage;
  let fixture: ComponentFixture<ModPerfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

  fixture = TestBed.createComponent(ModPerfilPage);
  component = fixture.componentInstance;
  fixture.detectChanges();
}));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
