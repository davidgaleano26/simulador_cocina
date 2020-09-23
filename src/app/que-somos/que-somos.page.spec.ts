import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueSomosPage } from './que-somos.page';

describe('QueSomosPage', () => {
  let component: QueSomosPage;
  let fixture: ComponentFixture<QueSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueSomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
