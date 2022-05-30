import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  //nao temos o endereco do backend
  private apiUrl = 'https://gutendex.com/books/';

  //avisa que o retorno sera um json
  httpOptions = {
    headers: new HttpHeaders({
        'content-type':'application/json; charset=utf-8'
    })
  }

  //injeta o servico httpclient
  constructor(private http:HttpClient) {}

  getBook() {
    return this.http.get(this.apiUrl, this.httpOptions);
  }
}
