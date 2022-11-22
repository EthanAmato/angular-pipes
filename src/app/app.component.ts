import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount = 223.4256;
  channelName = "iLoveToFarm99";
  score = 0.8945;
  today = new Date();
  name = "Ethan Amato";
  names: string[] = ["Ethan Amato", "Elon Must", "Warren Buffet", "Selena Gomez", "Hillary Duff"]


}
