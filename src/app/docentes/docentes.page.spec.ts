import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocentesPage } from './docentes.page';

describe('DocentesPage', () => {
  let component: DocentesPage;
  let fixture: ComponentFixture<DocentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
