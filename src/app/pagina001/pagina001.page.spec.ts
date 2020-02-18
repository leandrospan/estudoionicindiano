import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pagina001Page } from './pagina001.page';

describe('Pagina001Page', () => {
  let component: Pagina001Page;
  let fixture: ComponentFixture<Pagina001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
