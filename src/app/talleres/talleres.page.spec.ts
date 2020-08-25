import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TalleresPage } from './talleres.page';

describe('TalleresPage', () => {
  let component: TalleresPage;
  let fixture: ComponentFixture<TalleresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalleresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TalleresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
