import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDetailsComponent } from './home/home.component';
import { SupportDetailsComponent } from './support/support.component';
import { NavBarComponent } from './nav/navbar.component';
import { FooterbarComponent } from './footer/footer.component';
import { appRoutes } from './routes'


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeDetailsComponent,
    SupportDetailsComponent,
    FooterbarComponent,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
