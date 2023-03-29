import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  name:any;
  imagePath:any;
  createRoom:String="";
  code:string="";

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
