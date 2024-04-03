import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private apiurl = "http://localhost:5056/api/HomeAdmins";

  newphim(data: any): Observable<any> {
    const url = `${this.apiurl}/newphim`;
    return this.http.post(url, data).pipe();
  }
  newtapphim(data: any): Observable<any> {
    const url = `${this.apiurl}/newtapphim`;
    return this.http.post(url, data).pipe();

  }
}
