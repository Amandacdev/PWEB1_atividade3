import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAtividadeComponent } from './listagem-atividade.component';

describe('ListagemAtividadeComponent', () => {
  let component: ListagemAtividadeComponent;
  let fixture: ComponentFixture<ListagemAtividadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemAtividadeComponent]
    });
    fixture = TestBed.createComponent(ListagemAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
