import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LichsuService {

  constructor(private http: HttpClient) { }

  getalllsx(id: any): Observable<any> {
    const url = `http://localhost:5056/api/LichSuXems/lichsu?id=${id}`
    return this.http.get(url).pipe();
  }
}
