import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.scss']
})
export class WordInfoComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

  editDescription(description: string): string {
    return this.capitalizeFirstLetter(this.addDot(description));
  }

  addDot(description: string): string {
    return description.charAt(description.length - 1) === '.' ? description : description + '.';
  }

  capitalizeFirstLetter(description: string): string {
    return description.charAt(0).toUpperCase() + description.slice(1);
  }

  isWordFormNoteType(noteType: string): boolean {
    return noteType === 'wordFormNote';
  }

  isGrammaticalNoteType(noteType: string): boolean {
    return noteType === 'grammaticalNote';
  }

  playAudio(audioPath: string) {
    let audio = new Audio();
    audio.src = audioPath;
    audio.load();
    audio.play();
  }
}
