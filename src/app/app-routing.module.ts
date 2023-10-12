import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CadastroAtividadeComponent} from "./atividade/cadastro-atividade/cadastro-atividade.component";
import {ListagemAtividadeComponent} from "./atividade/listagem-atividade/listagem-atividade.component";

const routes: Routes = [
  {
    path: "cadastro-atividade",
    component: CadastroAtividadeComponent
  },
  {
    path: "listagem-atividade",
    component: ListagemAtividadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
