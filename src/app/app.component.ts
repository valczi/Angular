import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my Cinema';
  films: any = [];
  time: number=0;
  constructor() {
  }

  ngOnInit() {
    const counter = interval(1000);

    counter.subscribe(
      (value) => {
        this.time = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    )
  }
  onAirAll(){
   // this.Film.setOnAir();
  }
  notOnAirAll(){
    //this.Film.setNotOnAir();
  }

}
