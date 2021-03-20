import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component'
import { PixkeyComponent } from './pixkey/pixkey.component'
import { RegistrationComponent } from './registration/registration.component'
import { RestrictionComponent } from './restriction/restriction.component'

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
  },
  {
    path:'pixkey',
    component: PixkeyComponent,
  },
  {
    path:'registration',
    component: RegistrationComponent,
  },
  {
    path:'restriction',
    component: RestrictionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
