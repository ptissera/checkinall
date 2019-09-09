import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionUser } from '../models/session-user.model';
import { CRUDService } from 'src/app/core/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends CRUDService<SessionUser>{
    private currentUserSubject: BehaviorSubject<SessionUser>;
    public currentUser: Observable<SessionUser>;

    constructor(http: HttpClient) {
      super('auth/signIn', http);
      this.currentUserSubject = new BehaviorSubject<SessionUser>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): SessionUser {
        return this.currentUserSubject.value;
    }

    
    login(userData: {email: string, password: string}) {
      return this.post(userData)
            .pipe(map((user: SessionUser) => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}