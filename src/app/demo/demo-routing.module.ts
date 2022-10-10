  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import {ButtonsComponent} from "./buttons/buttons.component";
  import {FlexboxComponent} from "./flexbox/flexbox.component";
  //the component that will handle this root !! okayy

const routes: Routes = [
  {path: 'flexbox',component: FlexboxComponent},
  {path: 'buttons',component: ButtonsComponent},

  {path : '**' , redirectTo : 'buttons'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
