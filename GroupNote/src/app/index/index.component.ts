import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Rooms } from '../RoomIndex-data';
import { Room } from '../RoomIndex';

@Component({
  selector: 'app-index',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  Rooms!: Room[]

  ngOnInit()
  {
    this.Rooms = Rooms
  }
}
