import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { loadUsers } from './state/user.actions';
import { UserState } from './state/user.reducer';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users$ = this.store.select('users');

    constructor(
        private store: Store<UserState>
    ) { }

    ngOnInit(): void {
        this.users$.subscribe(res => {
            console.log(res);
        });

        this.store.dispatch(loadUsers());
    }

}
