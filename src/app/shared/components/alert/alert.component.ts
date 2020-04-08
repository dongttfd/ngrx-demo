import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { AlertModalStoreState, AlertModalStoreActions, RootStoreState } from 'src/app/store';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

    modalState$: Observable<AlertModalStoreState.AlertModalState>;
    subscription = new Subscription();

    constructor(
        private store: Store<RootStoreState.StateMap>,
        private activeModal: NgbActiveModal
    ) {
        this.modalState$ = this.store.pipe(select(AlertModalStoreState.modalFeatureKey));
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
        this.store.dispatch(AlertModalStoreActions.closeModal());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
