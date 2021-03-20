import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PixkeyComponent } from './pixkey/pixkey.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestrictionComponent } from './restriction/restriction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PixkeyComponent,
    RegistrationComponent,
    RestrictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
