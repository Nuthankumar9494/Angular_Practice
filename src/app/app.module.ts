import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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
import { PassdataComponent } from './passdata/passdata.component';
import { ButtonComponent } from './button/button.component';

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
    HeadComponent,
    PassdataComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
