import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from 'src/app/core/state';
import * as ModalActions from 'src/app/core/state/modal.actions';
import { FeatureKey, State } from 'src/app/core/state/modal.reducer';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

    modalState$: Observable<State>;
    subscription = new Subscription();

    constructor(
        private store: Store<fromRoot.State>,
        private activeModal: NgbActiveModal
    ) {
        this.modalState$ = this.store.pipe(select(FeatureKey));
    }

    ngOnInit(): void {
        const subscription = this.modalState$.subscribe(state => {
            console.log(state);
            if (!state.isOpened) {
                this.activeModal.close();
            }
        });

        this.subscription.add(subscription);
    }

    closeModal() {
        this.store.dispatch(new ModalActions.CloseModal());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
