import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private main:MainService) {}
  // constructor(private modalService: NgbModal) {}
  
  // @Input() openMe:Boolean;
  @Input() myChild:Boolean;

  ngOnInit() {
  }

   closeResult: string;


  openModal(content) {

    console.log(content);
    // this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
