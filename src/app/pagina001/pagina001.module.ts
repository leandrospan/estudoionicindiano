import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina001PageRoutingModule } from './pagina001-routing.module';

import { Pagina001Page } from './pagina001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina001PageRoutingModule
  ],
  declarations: [Pagina001Page]
})
export class Pagina001PageModule {}
