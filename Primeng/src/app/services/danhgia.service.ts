import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class DanhgiaService {

  constructor(private http: HttpClient) { }
  danhgia(data: any): Observable<any> {
    const url = 'http://localhost:5056/api/DanhGias/danhgia';
    return this.http.post(url, data).pipe();
  }

}
