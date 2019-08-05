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

  word: string = '';
  results: Result[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSend() {
    this.mainService.getResult().subscribe(response => {
      this.word = response.id;
      this.results = response.results;
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
