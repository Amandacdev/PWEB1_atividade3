import {Component} from '@angular/core';
import {ATIVIDADES} from "../../shared/model/ATIVIDADES";
import {Atividade} from "../../shared/model/atividade";

@Component({
  selector: 'app-listagem-atividade',
  templateUrl: './listagem-atividade.component.html',
  styleUrls: ['./listagem-atividade.component.css']
})

export class ListagemAtividadeComponent {
  atividades: Atividade[] = ATIVIDADES;

  novoTitulo: string = '';
  novaDescricao: string = '';
  novoPrazo: string = '';

   remover(tituloAtividadeARemover: Atividade):void{
     const indxAtiviARemover: number = this.atividades.findIndex(Atividade=> Atividade.titulo === tituloAtividadeARemover.titulo);

     if(indxAtiviARemover >= 0){
     this.atividades.splice(indxAtiviARemover,1);
    }
  }

  editar(tituloAtividadeAEditar: Atividade):void{
    const indxAtiviAEditar: number = this.atividades.findIndex(Atividade=> Atividade.titulo === tituloAtividadeAEditar.titulo);

    if(indxAtiviAEditar >= 0){
      this.atividades[indxAtiviAEditar].titulo = this.novoTitulo;
      this.atividades[indxAtiviAEditar].descricao = this.novaDescricao;
      this.atividades[indxAtiviAEditar].prazo = this.novoPrazo;

    }
   }
}

