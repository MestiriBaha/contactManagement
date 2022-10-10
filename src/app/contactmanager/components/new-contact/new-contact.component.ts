import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  avatars = ['svg-1', 'svg-2' , 'svg-3' , 'svg-4']
  user : User ;
  constructor(private dialogref : MatDialogRef<NewContactComponent> , private userservice : UserService ) { }
  name = new FormControl('', [Validators.required]);

  getErrorMessage() {

    return  this.name.hasError('required') ? 'you must enter a name ' : '';
  }

  ngOnInit(): void {
  this.user = new User() ;
  }
save() {// this.user.name = this.name.value ;
    this.userservice.addUser(this.user).then( (user : any ) => {  this.dialogref.close(user) ; })
   }
dismiss() {this.dialogref.close(null)}


}
