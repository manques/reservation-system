import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookedComponent } from './booked/booked.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TriangleComponent } from './triangle/triangle.component';
import { LiveSeatsComponent } from './live-seats/live-seats.component';
import { TwoDimensionArrayComponent } from './two-dimension-array/two-dimension-array.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookedComponent,
    NavbarComponent,
    PageNotFoundComponent,
    TriangleComponent,
    LiveSeatsComponent,
    TwoDimensionArrayComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
