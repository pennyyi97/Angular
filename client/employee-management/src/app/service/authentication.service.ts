import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

export class User{
  constructor(public status:string){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }




/*   authenticate(username, password) {
    let apiurl = 'http://localhost:8080/employees/validateLogin'
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/json')
      .set('username', username)
      .set('password', password);

    console.log(username,password);
    console.log(headers);
    return this.httpClient.get(apiurl, {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          console.log("=========2===========")
          return userData;
        }
      ),
      catchError((err: HttpErrorResponse) => {
        console.log("err")
        console.log(err)
        return EMPTY;
      })
    );

  } */
  authenticate(username: string, password: string): Observable<User> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log(btoa(username), btoa(password));
    console.log(headers);
    return this.httpClient.get<User>("/employees/validateLogin", {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          console.log("=========2===========")
          return userData;
        }
      ),
      catchError((err: HttpErrorResponse) => {
        console.log("err")
        console.log(err.url)
        console.log(err.message)
        return EMPTY;
      })
    );
}
 /*  authenticate(username, password) {


    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    console.log(btoa(username), btoa(password));
    console.log(headers);
    return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          console.log("=========2===========")
          return userData;
        }
      ),
      catchError((err: HttpErrorResponse) => {
        console.log("err")
        console.log(err)
        return EMPTY;
      })
    );

  } */
  /* authenticate(username, password) {
    if (username === 'pennyyi' && password === 'password') {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  } */

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    console.log("=============1=============")
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
