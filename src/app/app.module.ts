import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QweComponent } from './qwe/qwe.component';
import { AsdComponent } from './asd/asd.component';

@NgModule({
  declarations: [
    AppComponent,
    QweComponent,
    AsdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
