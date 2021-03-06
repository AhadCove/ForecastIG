import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MainService }  from '../../services/main.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public days=["0","1","2","3","4"];
  public openMe=false;
  // public myChild;
   @Input() public myChild;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    setInterval(_=>console.log(this.myChild),2000);
  }

}
