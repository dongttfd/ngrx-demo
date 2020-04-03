import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { loadUsers } from './state/user.actions';
import { UserState } from './state/user.reducer';
import { selectUsers } from './state/user.selectors';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users$ = this.store.pipe(select(selectUsers));

    constructor(
        private store: Store<UserState>
    ) { }

    ngOnInit(): void {
        this.store.dispatch(loadUsers());
    }

}
