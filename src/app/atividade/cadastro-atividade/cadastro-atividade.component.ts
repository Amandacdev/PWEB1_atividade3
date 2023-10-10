import { Component, OnInit } from '@angular/core';
import {Atividade} from "../../../shared/model/atividade";

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.component.html',
  styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent {

  atividade: Atividade;
  atividades: Array<Atividade>;
  aluno = 'Amanda';

  constructor() {
    this.atividade = new Atividade('','','');
    this.atividades = new Array<Atividade>();
  }

  inserirAtividade(): void {
    this.atividades.push(this.atividade);
    this.atividade = new Atividade("","","");//dessa forma, crio um novo objeto na memória ram
  }
}
