import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  usercount=12345912
  ngOnInit(): void {
  
    setInterval(()=>{
      this.usercount+=2
    },4000)
  }

  

}
