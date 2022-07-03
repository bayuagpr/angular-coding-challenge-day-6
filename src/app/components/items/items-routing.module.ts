import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component'
const routes: Routes = [
  { path: '', component: ItemsComponent },
  // add the route that receive the id param here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }