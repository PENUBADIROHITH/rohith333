import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/_Interfaces/User/UserDetail';

@Component({
  selector: 'app-Toolbar',
  templateUrl: './Toolbar.component.html',
  styleUrls: ['./Toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public now: Date = new Date();
  logedInUser: UserDetail;
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {
    this.logedInUser.username ="Ajay Kumar";
    this.logedInUser.userRole ="Area Supervisor";
    this.GetLoggedUser();
  }
  GetLoggedUser() {
    
  }
}
