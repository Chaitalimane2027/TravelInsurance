import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDetailsComponent } from './home/home.component';
import { SupportDetailsComponent } from './support/support.component';
import { NavBarComponent } from './nav/navbar.component';
import { FooterbarComponent } from './footer/footer.component';
import { FaqDetailsComponent } from './faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { appRoutes } from './routes'


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeDetailsComponent,
    SupportDetailsComponent,
    FooterbarComponent,
    NavBarComponent,
    FaqDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
