import { Component, inject } from '@angular/core';
import { provideRouter, RouterLink, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { routes } from '../app.routes';
import { TestingService } from '../testing.service';
import { Room } from '../RoomIndex';
import { Account } from '../Account';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [RouterLink,RouterOutlet, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
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
