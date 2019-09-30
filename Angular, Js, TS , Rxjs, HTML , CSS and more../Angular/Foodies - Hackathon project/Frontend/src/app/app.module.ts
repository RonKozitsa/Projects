import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardDropdownComponent } from './components/card-dropdown/card-dropdown.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    library.add(faHamburger);
  }
}
