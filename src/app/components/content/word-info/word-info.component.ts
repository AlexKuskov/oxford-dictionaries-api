import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.scss']
})
export class WordInfoComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  onSend() {
    this.mainService.initial();
  }

}
