import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, Observable } from 'rxjs';
import {
    UserStoreSelectors,
    UserStoreActions,
    RootStoreState,
    ConfirmModalStoreActions,
    ConfirmModalStoreState
} from '../store';
import { User } from '../shared/models';
import { UserModalComponent } from './user-modal/user-modal.component';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

    subscription = new Subscription();
    users$: Observable<User[]>;
    confirmState$: Observable<ConfirmModalStoreState.ConfirmModalState>;

    constructor(
        private store: Store<RootStoreState.StateMap>,
        private ngbModal: NgbModal
    ) {
        this.users$ = this.store.pipe(select(UserStoreSelectors.selectUsers));
        this.confirmState$ = this.store.pipe(select(ConfirmModalStoreState.modalFeatureKey));
    }

    ngOnInit(): void {
        this.store.dispatch(UserStoreActions.loadUsers());

        const subscription = this.confirmState$.subscribe(state => {
            if (state.isOpened) {
                return this.ngbModal.open(ConfirmComponent);
            }
        });

        this.subscription.add(subscription);
    }

    toAddUser() {
        this.ngbModal.open(UserModalComponent);
    }

    toEdit(user: User) {
        const userModalRef = this.ngbModal.open(UserModalComponent);
        userModalRef.componentInstance.user = { ...user };
    }

    toDelete(user: User) {
        const modalRef = this.store.dispatch(ConfirmModalStoreActions.openConfirmModal({
            title: 'Delete',
            content: `Are u want to delete "${user.first_name} ${user.last_name}" ?`,
            textOk: 'Yes',
            textClose: 'No'
        }));

        const subs = this.confirmState$.subscribe(state => {
            if (!state.isOpened && state.closeWith === ConfirmModalStoreState.AGREE) {
                subs.unsubscribe();
                return this.callDelete(user);
            }
        });
    }

    callDelete(user: User) {
        this.store.dispatch(UserStoreActions.deleteUser({ user }));
    }
}
