import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchForm', { read: NgForm, static: true }) searchForm: NgForm;

  keyboardBoxOpened: boolean = false;
  symbolsUppercase: boolean = false;

  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.mainService.word = localStorage.getItem('word');
    this.mainService.searchWord = localStorage.getItem('searchWord');
    this.mainService.isResultReturned = localStorage.getItem('isResultReturned') == "true";
    this.mainService.results = JSON.parse(localStorage.getItem('results'));
  }

  onSubmit(): void {
    this.mainService.searchWord = this.searchForm.form.value.query.toLowerCase();
    this.mainService.word = this.searchForm.form.value.query.toLowerCase();
    localStorage.setItem("searchWord", this.mainService.searchWord);
    localStorage.setItem("word", this.mainService.word);
    this.mainService.getResult();
  }

  switchKeyboardBox() {
    this.keyboardBoxOpened = !this.keyboardBoxOpened;
  }

  switchSymbolsUppercase() {
    this.symbolsUppercase = !this.symbolsUppercase;
  }

  addSymbol(symbol: string) {
    this.mainService.searchWord += symbol;
  }
}
