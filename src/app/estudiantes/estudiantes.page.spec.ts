import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudiantesPage } from './estudiantes.page';

describe('EstudiantesPage', () => {
  let component: EstudiantesPage;
  let fixture: ComponentFixture<EstudiantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
