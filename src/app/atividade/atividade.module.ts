import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAtividadeComponent } from './cadastro-atividade/cadastro-atividade.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ListagemAtividadeComponent } from './listagem-atividade/listagem-atividade.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";

import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from "@angular/material/chips";


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
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        MatDividerModule,
        MatChipsModule
    ]
})
export class AtividadeModule { }
