import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../../app/user/user";

@Injectable()
export class UserServiceService {

  constructor(private http:HttpClient) { }

  private userUrl:string = 'http://jsonplaceholder.typicode.com/users';

  /**
   * getUsers
   */
   getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

 /**
  * getUsersById
  */
  getUsersById(user) {
  return this.http.get<User>(this.getUser(user));
 }
  /**
   * addUser
   */
   addUser(user) {
    return this.http.post(this.userUrl,user);
    
  }

 /**
   * updateUser
   */
   updateUser(user) {
    return this.http.put(this.userUrl , user);
  }

  /**
   * updateUserById
   */
   updateUserById(user) {
    return this.http.put(this.getUser(user.id ) , user);
  }

   /**
   * getUser
   */
   getUser(id) {
    return this.userUrl + "/"+ id;
  }

  /**
   * deleteUserById
   */

   deleteUserById(user) {
    return this.http.delete(this.getUser(user.id ) , user);
  }

   /**
   * deleteUser
   */

   deleteUser(user) {
    return this.http.delete(this.getUser(user.id ) , user);
  }



}
