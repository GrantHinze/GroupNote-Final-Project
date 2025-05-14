import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { RegistercardComponent } from './registercard/registercard.component';
import { IndexComponent } from "./index/index.component";
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  RouterLink, RouterModule, CardComponent, RegistercardComponent, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GroupNote';

}
