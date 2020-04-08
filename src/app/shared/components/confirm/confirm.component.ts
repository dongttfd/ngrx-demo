import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { ConfirmModalStoreState, RootStoreState, ConfirmModalStoreActions } from 'src/app/store';


@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, OnDestroy {

    subscription = new Subscription();

    modalState$: Observable<ConfirmModalStoreState.ConfirmModalState>;

    constructor(
        private store: Store<RootStoreState.StateMap>,
        private activeModal: NgbActiveModal
    ) {
        this.modalState$ = this.store.pipe(select(ConfirmModalStoreState.modalFeatureKey));
    }

    ngOnInit(): void {
        const subscription = this.modalState$.subscribe(state => {
            if (!state.isOpened) {
                this.activeModal.close();
            }
        });

        this.subscription.add(subscription);
    }

    closeModal() {
        this.store.dispatch(
            ConfirmModalStoreActions.closeConfirmModal({ closeWith: ConfirmModalStoreState.CANCLE })
        );
    }

    handleClickOk() {
        this.store.dispatch(
            ConfirmModalStoreActions.closeConfirmModal({ closeWith: ConfirmModalStoreState.AGREE })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
