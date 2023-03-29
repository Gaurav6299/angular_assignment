import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { AppComponent } from './app.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { ProfileComponent } from './profile/profile.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: StartComponent,
      },
      {
        path: 'app-info',
        component: AppInfoComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'accounts',
        component: AccountComponent,
      },
      {
        path: 'join-room',
        component: JoinRoomComponent,
      },
      {
        path:'create-room',component:CreateRoomComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
