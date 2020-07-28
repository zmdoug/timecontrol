import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private storage: StorageService) { }

  auth(loginData) {
    let url = 'http://localhost:3000/sessions';
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, loginData)
        .toPromise().then(
          res => resolve(res),
          error => reject(error),
        );
    });
    return promise;
  }

  getToken() {
    let user = this.storage.getData('user');
    if (!user) return null;
    return JSON.parse(user)['token'];
  }
}
