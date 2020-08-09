import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestigacionPage } from './investigacion.page';

describe('InvestigacionPage', () => {
  let component: InvestigacionPage;
  let fixture: ComponentFixture<InvestigacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestigacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
