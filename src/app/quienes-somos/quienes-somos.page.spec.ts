import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuienesSomosPage } from './quienes-somos.page';

describe('QuienesSomosPage', () => {
  let component: QuienesSomosPage;
  let fixture: ComponentFixture<QuienesSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienesSomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuienesSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
