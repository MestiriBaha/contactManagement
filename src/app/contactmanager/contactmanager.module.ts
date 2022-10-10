import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { RouterLink} from "@angular/router";



import { ContactmanagerappComponent } from './contactmanagerapp.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';


import { FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from '../shared/material.module'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatListModule} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import { NotesComponent } from './components/notes/notes.component';
import { MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import { NewContactComponent } from './components/new-contact/new-contact.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";

const routes : Routes=  [
  {path : '' , component : ContactmanagerappComponent,
  children : [ { path : ':id', component : MainContentComponent},
               { path : '', component : MainContentComponent}   ]},
  {path : '**', redirectTo : ''}
]

@NgModule({
  declarations: [
    ContactmanagerappComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    NotesComponent,
    NewContactComponent,


  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
  MatListModule,
    MatIconModule,
  MatCardModule,
  HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,

  ],

  providers: [


  ]
})
export class ContactmanagerModule { }
