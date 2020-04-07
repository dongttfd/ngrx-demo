import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import {
    UserStoreState,
    UserStoreActions,
    UserStoreSelectors
} from 'src/app/store';
import { User } from 'src/app/shared/models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit, OnDestroy {

    user: User = {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        phone: '',
        address: '',
    };

    errors$ = this.store.pipe(select(UserStoreSelectors.selectErrors));
    subscription = new Subscription();

    constructor(
        private actions$: Actions,
        private store: Store<UserStoreState.UserState>,
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit(): void {
        this.store.dispatch(UserStoreActions.resetUserErrors());

        const { createdUserSuccess, editedUserSuccess } = UserStoreActions;

        const subscription = this.actions$.pipe(ofType(createdUserSuccess, editedUserSuccess))
            .subscribe(() => this.activeModal.close());

        this.subscription.add(subscription);
    }

    toSaveUser() {
        if (this.user.id) {
            this.edit();
        } else {
            this.add();
        }
    }

    add() {
        this.store.dispatch(UserStoreActions.createUser({ user: this.user }));
    }

    edit() {
        this.store.dispatch(UserStoreActions.editUser({ user: this.user }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
