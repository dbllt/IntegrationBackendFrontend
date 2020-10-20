import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const url = '/api';

@Injectable({
  providedIn: 'root'
})
export class APICallerService {

  constructor(private http: HttpClient) {
  }

  getBoards(): Observable<any> {
    return this.http.get(url + '/boardkb/');
  }

  getBoardByName(name: string): Observable<any> {
    return this.http.get(url + '/boardkb/' + name);
  }

  createBoard(name: string): Observable<any> {
    return this.http.post(url + '/boardkb/', {name, columns: []});
  }

}

