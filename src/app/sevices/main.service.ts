import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "/api/v2/entries/en-gb/word";
  // /entries/{source_lang}/{word_id}
  // /lemmas/{source_lang}/{word_id}
  // https://od-api.oxforddictionaries.com/api/v2/search/en-gb?q=link

  initial() {
    const httpOptions = {
      headers: new HttpHeaders({
        "app_id": "61764e40",
        "app_key": "257549167a9e34c55f3a8ed7d1eee7c9"
      })
    };

    this.http.get(this.baseUrl, httpOptions)
      .subscribe(response => {
        console.log(response);
      });
  }
}
