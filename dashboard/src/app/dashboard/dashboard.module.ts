import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { ImagemComponent } from './imagem/imagem.component';
import { TabelaComponent } from './tabela/tabela.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ImagemComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    CartaoModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
