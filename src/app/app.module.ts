import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BasketComponent } from './components/basket/basket.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    HeaderComponent,
    ContactsComponent,
    BasketComponent,
    CardComponent
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
