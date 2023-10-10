import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAtividadeComponent } from './cadastro-atividade/cadastro-atividade.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ListagemAtividadeComponent } from './listagem-atividade/listagem-atividade.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [CadastroAtividadeComponent, ListagemAtividadeComponent],
  exports: [
    CadastroAtividadeComponent,
    ListagemAtividadeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class AtividadeModule { }
