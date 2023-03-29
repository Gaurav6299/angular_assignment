import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: any;
  path1 = '../../assets/image/avatar5.png';
  path2 = '../../assets/image/avatar1.png';
  path3 = '../../assets/image/avatar2.png';
  path4 = '../../assets/image/avatar3.png';
  path5 = '../../assets/image/avatar4.png';
  imagePath:boolean=false;
  constructor(private userService: UserInfoService, private router: Router) {
    userService.userName.subscribe((name: any) => {
      this.name = name;
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
    });

    this.name=localStorage.getItem("name")

    this.name=this.name.replace(/['"]+/g, '')
  }

  /**
   * backToAppInfo
   */
  backToAppInfo() {
    this.userService.setName(this.name);
    this.router.navigate(['/app-info']);
  }

  /**
   * chooseAvatar
   */
  chooseAvatar(imagePath: any) {
    this.imagePath=true
    this.userService.setImage(imagePath);
    localStorage.setItem('image', imagePath);
    console.log(localStorage.getItem('image'));
  }

  goToNext(){
    this.router.navigate(['/accounts'])

  }
}
