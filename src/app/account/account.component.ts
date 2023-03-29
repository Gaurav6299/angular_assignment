import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  imagePath: any;
  name: String="";
  constructor(private router: Router, private userService: UserInfoService) {

  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
    });
    this.userService.userImage.subscribe((img: any) => {
      this.imagePath = img;
    });
    this.userService.userName.subscribe((name: any) => {
      this.name = name;
    });
    this.imagePath=localStorage.getItem("image");
    this.name=(String)(localStorage.getItem("name"))
    this.name=this.name.replace(/['"]+/g, '')
  }

  /**
   * backToProfile
   */
  backToProfile() {
    this.router.navigate(['/profile']);
  }
}
