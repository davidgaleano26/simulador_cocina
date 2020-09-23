import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsQuienesSomosPage } from './tabs-quienes-somos.page';

describe('TabsQuienesSomosPage', () => {
  let component: TabsQuienesSomosPage;
  let fixture: ComponentFixture<TabsQuienesSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsQuienesSomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsQuienesSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
