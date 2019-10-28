import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userData: object;
  @Output() showTable = new EventEmitter();
  firstname: string;
  lastname: string;
  data: object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = JSON.parse(JSON.stringify(this.userData))
    this.firstname = this.userData['firstname']; 
    this.lastname = this.userData['lastname']; 
    delete this.data['firstname'];
    delete this.data['lastname'];
  }

  redirectToTable() {
    this.router.navigate(['/']);
    this.showTable.emit();
  }

}
