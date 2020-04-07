import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserStoreSelectors, UserStoreActions, UserStoreState } from '../store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal/user-modal.component';
import { User } from '../shared/models';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users$ = this.store.pipe(select(UserStoreSelectors.selectUsers));

    constructor(
        private store: Store<UserStoreState.UserState>,
        private ngbModal: NgbModal
    ) { }

    ngOnInit(): void {
        this.store.dispatch(UserStoreActions.loadUsers());
    }

    toAddUser() {
        const userModalRef = this.ngbModal.open(UserModalComponent);
    }

    toEdit(user: User) {
        const userModalRef = this.ngbModal.open(UserModalComponent);
        userModalRef.componentInstance.user = user;
    }

    toDelete(user) {

    }
}
