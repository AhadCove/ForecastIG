import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loadList=[];
public openMe=false;

loadMe(){
        this.loadList.push(this.main.getDay());
  }

  constructor(private main:MainService) { }

  ngOnInit() {
    // for(var i = 0; i<5;i++){
    //   console.log(`Loop # ${i}`);
    //   this.loadMe();
    // }
  }

}
