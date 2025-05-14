import { Injectable } from '@angular/core';
import { Room } from './RoomIndex';
import { Account } from './Account';
import { Rooms } from './RoomIndex-data';
@Injectable({
  providedIn: 'root'
})
export class TestingService {
  protected AccountsList: Account[] = [
        {
        "AccountId": 1,
        "FirstName": "test",
        "LastName": "test",
        "Email": "Email",
        "Password": "password"
    }
  
  ];

  protected RoomList: Room[] = [    {
        "HostId" : 1,
        "RoomId" : 1,
        "RoomCode" : 1234,
        "RoomName" : "History"
    }]
  
  constructor() { }
  getAllAccounts() : Account[]
  {
    return this.AccountsList;
  }

  getAccountById(id: number): Account | undefined {
    return this.AccountsList.find(Account =>Account.AccountId === id)
  }

    getAllRooms() : Room[]
  {
    return this.RoomList;
  }

  getRoomById(id: number): Room | undefined {
    return this.RoomList.find(Room =>Room.RoomId === id);
  }
  submitRegistration(firstName: string, lastName: string, email: string, password: string)
  {
    console.log(firstName,lastName,email,password)
  }
}
