import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SecoundComponent } from './secound/secound.component';
// import { InlinepComponent } from './inlinep/inlinep.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TemstyleComponent } from './temstyle/temstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SecoundComponent,
    // InlinepComponent,
    UserlistComponent,
    TemstyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
