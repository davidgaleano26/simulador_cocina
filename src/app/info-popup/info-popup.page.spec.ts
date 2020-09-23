import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoPopupPage } from './info-popup.page';

describe('InfoPopupPage', () => {
  let component: InfoPopupPage;
  let fixture: ComponentFixture<InfoPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
