import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListagemComponent } from './eventos-listagem.component';

describe('EventosListagemComponent', () => {
  let component: EventosListagemComponent;
  let fixture: ComponentFixture<EventosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
