import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina001Page } from './pagina001.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina001PageRoutingModule {}
