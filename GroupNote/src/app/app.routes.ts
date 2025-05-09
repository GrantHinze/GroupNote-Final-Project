import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { RegistercardComponent } from './registercard/registercard.component';
import { IndexComponent } from './index/index.component';
import { JoincodeComponent } from './joincode/joincode.component';
import { RoomComponent } from './room/room.component';

export const routes: Routes = [

    {
        path: '',
        component: CardComponent,
        title: 'login'
    },
    {
        path: 'register',
        component: RegistercardComponent,
        title: 'register'
    },
    {
        path: 'index/:id',
        component: IndexComponent,
        title: 'index'
    },
    {
        path: 'joincode',
        component: JoincodeComponent,
        title:'joincode'
    },
    {
        path: 'room',
        component: RoomComponent,
        title: 'room'
    }
];
