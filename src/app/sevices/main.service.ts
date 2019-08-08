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
  isResultReturned: boolean = false;
  word: string = '';
  results: Result[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      "app_id": "61764e40",
      "app_key": "257549167a9e34c55f3a8ed7d1eee7c9"
    })
  };

  getResult(): void {
    this.isResultReturned = false;
    localStorage.setItem("isResultReturned", this.isResultReturned.toString());

    this.http.get<Root>(this.baseUrl + this.searchWord, this.httpOptions).subscribe(response => {
      this.word = response.id;
      this.results = response.results;
      this.isResultReturned = true;
      localStorage.setItem("word", this.word);
      localStorage.setItem("results", JSON.stringify(this.results));
      localStorage.setItem("isResultReturned", this.isResultReturned.toString());
    },
    (error) => {
      this.results = [];
      this.isResultReturned = true;
      localStorage.setItem("results", JSON.stringify(this.results));
      localStorage.setItem("isResultReturned", this.isResultReturned.toString());
    });
  }
}
