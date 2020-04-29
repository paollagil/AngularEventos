import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalListagemComponent } from './local-listagem.component';

describe('LocalListagemComponent', () => {
  let component: LocalListagemComponent;
  let fixture: ComponentFixture<LocalListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
