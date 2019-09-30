import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { Modal1Component } from "./modal1/modal1.component";
import { Modal2Component } from "./modal2/modal2.component";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    Modal1Component,
    Modal2Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
