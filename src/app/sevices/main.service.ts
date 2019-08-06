import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../models/root';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "/api/v2/entries/en-gb/";
  searchWord: string = '';
  
  word: string = '';
  results: Result[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      "app_id": "61764e40",
      "app_key": "257549167a9e34c55f3a8ed7d1eee7c9"
    })
  };

  getResult(): void {
    this.http.get<Root>(this.baseUrl + this.searchWord, this.httpOptions).subscribe(response => {
      this.word = response.id;
      this.results = response.results;
    });;
  }
}
