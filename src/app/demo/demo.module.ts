import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from "@angular/flex-layout";
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {MaterialModule} from '../shared/material.module'
import { FormsModule} from "@angular/forms";
import { FlexboxComponent } from './flexbox/flexbox.component';
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }
