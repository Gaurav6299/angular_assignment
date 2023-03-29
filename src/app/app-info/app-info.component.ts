import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
})
export class AppInfoComponent implements OnInit {
  name: string = '';
  isActiveNext: boolean = true;

  constructor(private userService: UserInfoService) {
    // console.log(this.name)
  }

  ngOnInit(): void {
    this.userService.userName.subscribe((name: any) => {
      this.name = name;
    });

    // this.name = String(localStorage.getItem('name'));

    // this.name = this.name.replace(/['"]+/g, '');
  }

  goToNext() {
    this.userService.setName(this.name);
    localStorage.setItem('name', JSON.stringify(this.name));
  }
}
