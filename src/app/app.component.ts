import { Component, OnInit, VERSION } from "@angular/core";
import { of, from } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);
    from([20, 15, 10, 5]).subscribe(
      item => console.log(`resulting item ...${item}`),
      error => console.log(`error occur ${error}`),
      () => console.log("completes")
    );
    of("ngan", "nhu", "nhan").subscribe(
      item => console.log(`My name is ${item}`),
      error => console.log(`error occur ${error}`),
      () => console.log("completed")
    );
  }
  name = "Angular " + VERSION.major;

  
}
