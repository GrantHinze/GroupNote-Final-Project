import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Room } from '../RoomIndex';
import { Rooms } from '../RoomIndex-data';
import { Account } from '../Account';
import { Accounts } from '../Account-data';
import { TestingService } from '../testing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registercard',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './registercard.component.html',
  styleUrl: './registercard.component.css'
})
export class RegistercardComponent {

    route: ActivatedRoute = inject(ActivatedRoute);
testingService: TestingService = inject(TestingService);
Account: Account | undefined; 
registerForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl('')
});

    constructor()
    {
      const AccountsId = Number(this.route.snapshot.params["AccountId"])
      this.Account = this.testingService.getAccountById(AccountsId)
    }
    submitRegistration()
    {
      this.testingService.submitRegistration(
        this.registerForm.value.firstName ?? '',
        this.registerForm.value.lastName ?? '',
        this.registerForm.value.email ?? '',
        this.registerForm.value.password ?? ''
      );
    }

  
}
