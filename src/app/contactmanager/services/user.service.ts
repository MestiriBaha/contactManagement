import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore! : {
    users : User[]
  }
  private _users! : BehaviorSubject<User[]> ;
  constructor(private http : HttpClient) {
    this.dataStore= { users:[]} ;
    this._users = new BehaviorSubject<User[]>([])
   }

   get users() : Observable<User[]> {
    return this._users.asObservable() ;
   }

   addUser(user : User) : Promise<User> {
    return new Promise((resolver,reject) => {
      user.id= this.dataStore.users.length +1 ;
      this.dataStore.users.push(user) ;
      this._users.next(Object.assign({},this.dataStore).users),
      resolver(user) ;
    })
   }
   userById(id : number) {
    return this.dataStore.users.find(x=> x.id==id)
   }
  loadall() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users' ;
    return this.http.get<User[]>(userUrl)
      .subscribe(data => {
        this.dataStore.users = data ;
        this._users.next(Object.assign({},this.dataStore).users)},
      error => {
        console.log('Failed to fetch users ') ;
      })

  }
}
