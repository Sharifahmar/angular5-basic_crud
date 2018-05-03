import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor() { }
    isLoggedIn: boolean = false;

    login(user, password) {
        if (user && password) {
            this.isLoggedIn = true;
        }
       return this.isLoggedIn;
    }
}