import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  private apiurl = "http://localhost:5056/api/Phims";

  phimbyid(id: any): Observable<any> {
    const url = `${this.apiurl}/phimbyid?id=${id}`;
    return this.http.get(url).pipe();

  }
  tapphimbyid(id: any): Observable<any> {
    const url = `${this.apiurl}/alltapbyphim?id=${id}`;
    return this.http.get(url).pipe();

  }
}
