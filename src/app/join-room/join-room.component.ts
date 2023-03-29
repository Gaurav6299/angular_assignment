import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {
  name:any;
  imagePath:any;
  code:String="";

  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
    });
    this.imagePath=localStorage.getItem("image");
    this.name=(String)(localStorage.getItem("name"))
    this.name=this.name.replace(/['"]+/g, '')
  }

   /**
   * backToProfile
   */
   backToProfile() {
    this.router.navigate(['/accounts']);
  }
}
