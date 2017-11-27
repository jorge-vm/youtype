import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';

@Injectable()
export class ApiService {

    postsUrl = environment.path + '/posts';
    usersUrl = environment.path + '/users';

    constructor(private http: HttpClient) { }

    getMessages(userId) {
        const url = `${this.postsUrl}/${userId}`;

        return this.http.get<any>(url)
            .catch(error => this.handleError(error));
    }

    postMessage(message) {
        const result = this.http.post(this.postsUrl, message)
            .share().catch(error => this.handleError(error));

        result.subscribe();
        return result;
    }

    getUsers() {
        return this.http.get<any>(this.usersUrl)
            .catch(error => this.handleError(error));

    }

    getProfile(userId) {
        const url = `${this.usersUrl}/${userId}`;
        return this.http.get(url)
            .catch(error => this.handleError(error));
    }

    follow(profileId) {
        const url = `${this.usersUrl}/follow`;
        const result = this.http.post(url, { profileId })
            .share().catch(error => this.handleError(error));

        result.subscribe();
        return result;
    }

    getContent() {
        const url = `${this.postsUrl}/content`;
        return this.http.get<any>(url)
            .catch(error => this.handleError(error));
    }

    private handleError(error: any): Observable<any> {
        console.log(`An error occurred: ${error}`);
        return Observable.throw('Something bad happened; please check the console');
    }
}
