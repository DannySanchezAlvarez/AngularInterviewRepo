import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApirestService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  queryGet(url: string) {
    return this.http.get(url).pipe(
      catchError((error: any) => {
        throw 'Error getting info';
      })
    );
  }
  queryPost(url: string, body: any) {
    return this.http.post(url, body).pipe(
      catchError((error: any) => {
        throw 'Error creating';
      })
    );
  }
  queryPut(url: string, body: any) {
    return this.http.put(url, body).pipe(
      catchError((error: any) => {
        throw 'Error updating';
      })
    );
  }
  queryDelete(url: string) {
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        throw 'Error deleting';
      })
    );
  }
}
