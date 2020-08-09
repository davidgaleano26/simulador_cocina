import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EgresadosPage } from './egresados.page';

describe('EgresadosPage', () => {
  let component: EgresadosPage;
  let fixture: ComponentFixture<EgresadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EgresadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
