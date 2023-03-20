import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuyBooksComponent } from './buy-books/buy-books.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BuyBooksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgPipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
