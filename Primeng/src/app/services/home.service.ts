import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiurl = "http://localhost:5056/api/Homes";
  constructor(private http: HttpClient) { }
  getallphim(page: any): Observable<any> {
    const url = `${this.apiurl}/getfilmbypag?page=${page}`;
    return this.http.get(url, httpOptions).pipe();
  }
  getfilmsbypage(page: any, pagesize: any): Observable<any> {
    const url = `${this.apiurl}/getfilmbypag?page=${page}&pagesize=${pagesize}`;
    return this.http.get(url, httpOptions).pipe();
  }
  getalltheloai(): Observable<any> {
    const url = `${this.apiurl}/Getalltheloai`;
    return this.http.get(url, httpOptions).pipe();

  }
}
