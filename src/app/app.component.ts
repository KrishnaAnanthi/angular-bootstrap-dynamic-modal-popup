import { Component, OnInit } from "@angular/core";
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "dynamic-popup";
  ngOnInit() {
  }
  openModal(modalId: string) {
    $("#" + modalId).modal("show");
  }
}
