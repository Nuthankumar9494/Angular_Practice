import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SecoundComponent } from './secound/secound.component';
// import { InlinepComponent } from './inlinep/inlinep.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TemstyleComponent } from './temstyle/temstyle.component';
import { EventsComponent } from './events/events.component';
import { PropertybindComponent } from './propertybind/propertybind.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SecoundComponent,
    // InlinepComponent,
    UserlistComponent,
    TemstyleComponent,
    EventsComponent,
    PropertybindComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
