import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLocalComponent } from './alterar-local.component';

describe('AlterarLocalComponent', () => {
  let component: AlterarLocalComponent;
  let fixture: ComponentFixture<AlterarLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
