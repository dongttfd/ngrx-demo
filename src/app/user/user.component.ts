import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserStoreSelectors, UserStoreActions, UserStoreState } from '../store';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users$ = this.store.pipe(select(UserStoreSelectors.selectUsers));

    constructor(
        private store: Store<UserStoreState.UserState>
    ) { }

    ngOnInit(): void {
        this.store.dispatch(UserStoreActions.loadUsers());
    }

}
