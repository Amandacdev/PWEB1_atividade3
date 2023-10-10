import {Component, OnInit} from '@angular/core';
import {Atividade} from "../../../shared/model/atividade";

@Component({
  selector: 'app-listagem-atividade',
  templateUrl: './listagem-atividade.component.html',
  styleUrls: ['./listagem-atividade.component.css']
})
export class ListagemAtividadeComponent implements OnInit {

  atividades = [
    {titulo:'Fazer resumo',descricao:'Atividade de português', prazo:'20/10/2023'},
    {titulo:'Organizar seminário',descricao:'Atividade de ciências', prazo:'28/10/2023'},
    {titulo:'Preparar aula de revisão',descricao:'Atividade de matemática', prazo:'12/10/2023'}
  ];

    constructor() {
      this.atividade = new Atividade('','','');
      this.atividades = new Array<Atividade>();
    }

  ngOnInit() {
  }
}



