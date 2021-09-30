import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScreenoneComponent } from './screenone/screenone.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScreenoneComponent,
    ScreentwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
