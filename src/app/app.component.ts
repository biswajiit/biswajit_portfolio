import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detail:String = "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.";
  name:String = "Biswajit Mishra";
  gitLink:String = "https://github.com/biswajiit";
  linkedInLink:String ="https://www.linkedin.com/in/biswajit-mishra-55060867/";
  linkedInLink_short:String = "https://bit.ly/2v67CaB";
}
