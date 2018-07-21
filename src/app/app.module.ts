import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router' ;

import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './pages/header/header.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { JumpbotronComponent } from './pages/jumpbotron/jumpbotron.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes:Routes = [
  { path:"", component: HomeComponent },
  { path:"about", component: AboutComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FeatureComponent,
    JumpbotronComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
