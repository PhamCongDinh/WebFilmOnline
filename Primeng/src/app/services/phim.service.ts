import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: HttpClient) { }
  private apiurl = "http://localhost:5056/api/Phims";

  phimbyid(id: any): Observable<any> {
    const url = `${this.apiurl}/phimbyid?id=${id}`;
    return this.http.get(url, httpOptions).pipe();

  }
  tapphimbyid(id: any): Observable<any> {
    const url = `${this.apiurl}/alltapbyphim?id=${id}`;
    return this.http.get(url, httpOptions).pipe();

  }

}
