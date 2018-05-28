import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../../app/user/user";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from "../message.service";

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private userUrl: string = 'http://jsonplaceholder.typicode.com/users';

  /**
   * getUsers
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(user => this.log(`getUsers`)),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /**
   * getUsersById
   */
  getUsersById(user): Observable<User> {
    return this.http.get<User>(this.getUser(user)).pipe(
      tap(user => this.log(`getUsersById`)),
      catchError(this.handleError<User>('getUsersById'))
    );
  }
  /**
   * addUser
   */
  addUser(user): Observable<User> {
    return this.http.post<User>(this.userUrl, user).pipe(
      tap(user => this.log(`addUser`)),
      catchError(this.handleError<User>('addUser', user))
    );

  }

  /**
    * updateUser
    */
  updateUser(user): Observable<User> {
    return this.http.put<User>(this.userUrl, user).pipe(
      tap(user => this.log(`updateUser`)),
      catchError(this.handleError<User>('updateUser', user))
    );
  }

  /**
   * updateUserById
   */
  updateUserById(user): Observable<User> {
    return this.http.put<User>(this.getUser(user.id), user).pipe(
      tap(user => this.log(`updated user by id`)),
      catchError(this.handleError<User>('updateUserById', user))
    );
  }

  /**
  * getUser
  */
  getUser(id) {
    return this.userUrl + "/" + id;
  }

  /**
   * deleteUserById
   */

  deleteUserById(user) {
    return this.http.delete(this.getUser(user.id), user).pipe(
      tap(user => this.log(`delete user by id`)),
      catchError(this.handleError('deleteUserById'))
    );
  }

  /**
  * deleteUser
  */

  deleteUser(user) {
    return this.http.delete(this.getUser(user.id), user).pipe(
      tap(user => this.log(`delete user `)),
      catchError(this.handleError('deleteUser'))
    );
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

}
