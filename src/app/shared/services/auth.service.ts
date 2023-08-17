import { AppStateModel } from '../store/Global/appstate.model';
import { AuthResponseData } from '../models/AuthResponseData.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { environment } from 'src/app/enviroments/enviroment';
import { logout } from 'src/app/component/auth/state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  timeoutInteval: any;
  constructor(private http: HttpClient, private store: Store<AppStateModel>) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );

    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );

    return user;
  }

  setUserinLocalStorage(user: User) {
    console.log(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.runtimeOutInterval(user);

  }


  getUserFromLocalStorage(){
    const userDataString =  localStorage.getItem('userData');

    if(userDataString) {
       const userData = JSON.parse(userDataString);

       const expirationDate = new Date(userData.expirationDate);
       const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );

      this.runtimeOutInterval(user);

       return user;
    }
    return null
  }


  runtimeOutInterval(user: User){
    const todaysDate = new Date().getTime();

    const exporationDate = user.expireDate.getTime();

    const timeInterval = exporationDate - todaysDate;

    this.timeoutInteval = setTimeout(() => {

      this.store.dispatch(logout())
    }, timeInterval);
  }

  logout(){
    localStorage.removeItem('userData');

    if(this.timeoutInteval){
      clearTimeout(this.timeoutInteval);
      this.timeoutInteval = null;
    }
  }
}
