import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';
import { Root } from 'src/app/models/root';
import { Result } from 'src/app/models/result';
import { Pronunciation } from 'src/app/models/pronunciation';
import { LexicalEntry } from 'src/app/models/lexical-entry';
import { Sense } from 'src/app/models/sense';
import { Subsense } from 'src/app/models/subsense';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.scss']
})
export class WordInfoComponent implements OnInit {

  word: string = 'dd';
  result: Root;
  
  results: Result[] = [];
  lexicalEntries: LexicalEntry[] = [];
  senses: Sense[] = [];
  subsenses: Subsense[] = [];
  pronunciation: Pronunciation;

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSend() {
    this.mainService.getResult().subscribe(response => {
      console.log("word:");
      console.log(response.id);
      this.word = response.id;
      
      console.log("audio:");
      this.results = response.results;

      this.pronunciation = response.results[0].lexicalEntries[0].pronunciations[0];
      console.log(this.pronunciation.audioFile);
      console.log(this.pronunciation.phoneticSpelling);
      
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

  editDescription(description: string) {
    return this.capitalizeFirstLetter(this.addDot(description));
  }

  addDot(description: string): string {
    return description.charAt(description.length - 1) === '.' ? description : description + '.';
  }

  capitalizeFirstLetter(description: string) {
    return description.charAt(0).toUpperCase() + description.slice(1);
  }

  isWordFormNoteType(noteType: string): boolean {
    return noteType === 'wordFormNote';
  }

  isGrammaticalNoteType(noteType: string): boolean {
    return noteType === 'grammaticalNote';
  }

}
