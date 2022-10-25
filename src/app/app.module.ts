import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterbarComponent } from './footer/footer.component';
import { HomeDetailsComponent } from './home/home.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeDetailsComponent,
    FooterbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
