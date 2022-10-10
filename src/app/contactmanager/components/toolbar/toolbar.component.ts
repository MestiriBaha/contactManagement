import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewContactComponent} from "../new-contact/new-contact.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()  toggleSidenav = new EventEmitter<void>() ;
  constructor(private dialog : MatDialog ) { }

  ngOnInit(): void {
  }
  openAddContactDialog():void {
let dialogref = this.dialog.open(NewContactComponent , { width : "450px"})
  }
//dialogref.afterClosed().subscribe (result => {console.log(' the dialog was closed ',result) ; });



}
