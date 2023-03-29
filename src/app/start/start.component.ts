import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  isZoomIn:boolean=false

  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
    });

    setTimeout(() => {
      this.isZoomIn=true;
    }, 2000);


    setTimeout(() => {
      this.isZoomIn=false;
      this.router.navigate(['/app-info'])
    }, 3000);
  }

}
