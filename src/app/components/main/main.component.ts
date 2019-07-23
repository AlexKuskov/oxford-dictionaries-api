import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    
  }

  onSend() {
    this.mainService.initial();
  }

  //app base url: https://od-api.oxforddictionaries.com/api/v2
  //app ID: 61764e40
  //app Keys: 257549167a9e34c55f3a8ed7d1eee7c9

}
