import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorListagemComponent } from './administrador-listagem.component';

describe('AdministradorListagemComponent', () => {
  let component: AdministradorListagemComponent;
  let fixture: ComponentFixture<AdministradorListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
