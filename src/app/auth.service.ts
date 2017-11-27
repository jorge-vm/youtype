import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthService {
    
    path = environment.path + "/auth"
    TOKEN_KEY = 'token'

    constructor(private http: HttpClient) { }

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    registerUser(registerData) {
        const url = `${this.path}/register`;

        const result = this.http.post<any>(url, registerData)
        .share()
        .catch(error => this.handleError(error));

        result.subscribe(res => {
            this.saveToken(res.token)
        });

        return result;
    }

    loginUser(loginData) {
        const url = `${this.path}/login`;

        const result = this.http.post<any>(url, loginData)
        .share()
        .catch(error => this.handleError(error));

        result.subscribe(res => {
            this.saveToken(res.token)
        });

        return result;
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY)
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token)
    }

    private handleError(error: any): Observable<any> {
        console.log(`An error occurred: ${error}`);
        return Observable.throw('Something bad happened; please check the console');
    }



}
