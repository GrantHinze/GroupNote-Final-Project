import { Component , inject} from '@angular/core';
import { Room } from '../RoomIndex';
import { Rooms } from '../RoomIndex-data';
import { Account } from '../Account';
import { Accounts } from '../Account-data';
import { TestingService } from '../testing.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-room',
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  accountList: Account[] = [];
  roomList: Room[] = [];
testingService: TestingService = inject(TestingService); 
route: ActivatedRoute = inject(ActivatedRoute);
}
