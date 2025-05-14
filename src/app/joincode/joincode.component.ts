import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TestingService } from '../testing.service';
import { Account } from '../Account';
import { Room } from '../RoomIndex';

@Component({
  selector: 'app-joincode',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './joincode.component.html',
  styleUrl: './joincode.component.css'
})
export class JoincodeComponent {
  Room: Room | undefined; 
  testingService: TestingService = inject(TestingService); 
 route: ActivatedRoute = inject(ActivatedRoute);
    RoomCode = 0

    constructor()
    {
      const roomId = Number(this.route.snapshot.params["AccountId"])
      this.Room = this.testingService.getRoomById(roomId)
    }
}
