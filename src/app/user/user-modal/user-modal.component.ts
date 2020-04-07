import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/shared/models';
import { UserStoreState, UserStoreActions, UserStoreSelectors } from 'src/app/store';

@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

    user: User = {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        phone: '',
        address: '',
    };

    errors$ = this.store.pipe(select(UserStoreSelectors.selectErrors));

    constructor(
        private store: Store<UserStoreState.UserState>,
        public activeModal: NgbActiveModal
    ) {}

    ngOnInit(): void {
        this.store.dispatch(UserStoreActions.resetUserErrors());
    }

    toSaveUser() {
        this.errors$.subscribe((errors) => {
            if (!errors) {
                this.activeModal.close();
            }
        });
        this.store.dispatch(UserStoreActions.createUser({ user: this.user }));
    }
}
