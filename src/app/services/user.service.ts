import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getFriends(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/friends`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user);
  }

  loginUser(emailOrUserName: string, password: string): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/login`,
     { emailOrUserName, password });
  }
}
