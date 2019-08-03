import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';
import { Root } from 'src/app/models/root';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.scss']
})
export class WordInfoComponent implements OnInit {

  word: string = 'dd';
  result: Root;
  results: Result[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSend() {
    this.mainService.getResult().subscribe(response => {
      console.log("word:");
      console.log(response.id);
      
      console.log("audio:");
      console.log(response.results[0].lexicalEntries[0].pronunciations[0].audioFile);
      console.log(response.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling);
      
      console.log("noun:");
      console.log(response.results[0].lexicalEntries[0].lexicalCategory.id);

      console.log("sense:");
      console.log(response.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
      console.log(response.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text);
      console.log(response.results[0].lexicalEntries[0].entries[0].senses[2].notes[0].text);

      console.log("subsense:");
      console.log(response.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[2].definitions[0]);
      console.log(response.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[2].examples[0].text);
      console.log(response.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[2].notes[0].text);

      //Origin
      console.log("origin:");
      console.log(response.results[0].lexicalEntries[0].entries[0].etymologies[0]);
    });
  }

}
