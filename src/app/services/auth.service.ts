import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  refreshToken(token: string): Observable<any> {
    const headers = new HttpHeaders(
      {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
      }
    );
    return this.http.get(`${this.apiUrl}/refreshToken`, {headers});
  }

  setAccessToken(token: string){
    return Storage.set({key:'accessToken', value:token});
  }
  getAccessToken(){
    return Storage.get({key:'accessToken'});
  }
  setRefreshToken(token: string){
    return Storage.set({key:'refreshToken', value:token});
  }
  getRefreshToken(){
    return Storage.get({key:'refreshToken'});
  }
}
