import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Rooms } from '../RoomIndex-data';
import { Room } from '../RoomIndex';
import { TestingService } from '../testing.service';
import { Account } from '../Account';

@Component({
  selector: 'app-index',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
testingService: TestingService = inject(TestingService);
Account: Account | undefined; 
  Rooms!: Room[]

  createSignal(){
   let counter = 0
    counter = counter * 2;
  }
  ngOnInit()
  {
    this.Rooms = Rooms
  }
}
