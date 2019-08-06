import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/sevices/main.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchForm', {read: NgForm}) searchForm: NgForm;

  constructor(public mainService: MainService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.mainService.searchWord = this.searchForm.form.value.query.toLowerCase();
    this.mainService.getResult();
  }

}
