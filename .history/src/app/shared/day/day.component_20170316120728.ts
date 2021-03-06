import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() dayNum;
  private day:any;
  constructor(private main:MainService ) { 
  }

  ngOnInit() {
    setTimeout(_=>this.day=this.main.getDay(this.dayNum)),2000;
    console.log("My day is: ", this.dayNum);
    // alert("day works");
  }

}
