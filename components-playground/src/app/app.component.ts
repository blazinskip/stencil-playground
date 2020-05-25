import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formControl = new FormControl();

  title = 'components-playground';

  ngOnInit(): void {
    this.formControl.statusChanges.subscribe(console.log);
    this.formControl.valueChanges.subscribe(console.log);
  }

  testButtonClick($event) {
    console.log($event);
  }

}
