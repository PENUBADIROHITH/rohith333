import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areasupervisor',
  templateUrl: './areasupervisor.component.html',
  styleUrls: ['./areasupervisor.component.css']
})
export class AreasupervisorComponent implements OnInit {
   name:any  = "Rohith";
  // private  mediaSub:Subscription;
  constructor() { }

  ngOnInit(): void {
    this.name="Rohith"
    // this.mediaSub=this.mediaObserver.media$.subscribe(
    //   (change:MediaChange)=>{
    //     console.log(change.mqAlias);
    //     console.log(change);
    //   }
    // );
  }
}
