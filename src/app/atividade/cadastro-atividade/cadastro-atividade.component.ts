import { Component, OnInit } from '@angular/core';
import {Atividade} from "../../shared/model/atividade";
import {ATIVIDADES} from "../../shared/model/ATIVIDADES";

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.component.html',
  styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent {

  atividades: Atividade[] = ATIVIDADES;
  atividade: Atividade;
  aluno = 'Amanda';

  constructor() {
    this.atividade = new Atividade('','','');
    //this.atividades = new Array<Atividade>();
  }

  inserirAtividade(): void {
    this.atividades.push(this.atividade);
    this.atividade = new Atividade("","","");
  }

}
