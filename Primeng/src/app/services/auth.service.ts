import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:5056/api/Authens";

  login(data: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, data).pipe();
  }
}
