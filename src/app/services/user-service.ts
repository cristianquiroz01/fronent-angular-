import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class UserService {
  private apiurl = "http://127.0.0.1:5000/"
  private http = inject(HttpClient);

  register (form: UserInterface):Observable<any>{
    return this.http.post(this.apiurl + "register", from) 

  }
}
