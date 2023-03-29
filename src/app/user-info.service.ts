import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  name=new BehaviorSubject(null);
  userName=this.name.asObservable();
  image=new BehaviorSubject("");
  userImage=this.image.asObservable();

  constructor() { }

  setName(name:any){
    this.name.next(name);
  }

  setImage(image:any){
    this.image.next(image)
  }
}
