import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Room } from '../RoomIndex';
import { Rooms } from '../RoomIndex-data';
import { Account } from '../Account';
@Component({
  selector: 'app-registercard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './registercard.component.html',
  styleUrl: './registercard.component.css'
})
export class RegistercardComponent {

    Accounts!: Account[]

    ngOnInit()
    {
      this.Accounts = this.Accounts
    }

  
}
