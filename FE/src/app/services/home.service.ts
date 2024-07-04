import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiurl = "http://localhost:5056/api/Homes";
  constructor(private http: HttpClient) { }
  getallphim(page: any): Observable<any> {
    const url = `${this.apiurl}/getfilmbypag?page=${page}`;
    return this.http.get(url).pipe();
  }
  getfilmsbypage(page: any, pagesize: any): Observable<any> {
    const url = `${this.apiurl}/getfilmbypag?page=${page}&pagesize=${pagesize}`;
    return this.http.get(url).pipe();
  }
  getalltheloai(): Observable<any> {
    const url = `${this.apiurl}/Getalltheloai`;
    return this.http.get(url).pipe();

  }
}
