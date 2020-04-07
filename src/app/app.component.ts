import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from './shared/components/alert/alert.component';
import { RootStoreState, AlertModalStoreState, AlertModalStoreActions } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

    modalState$: Observable<AlertModalStoreState.AlertModalState>;
    subscription = new Subscription();

    constructor(
        private store: Store<RootStoreState.StateMap>,
        private config: NgbModalConfig,
        private modalService: NgbModal
    ) {
        this.modalState$ = this.store.select(AlertModalStoreState.modalFeatureKey);
        this.config.backdrop = 'static';
        this.config.keyboard = false;
    }

    ngOnInit() {
        const subscription = this.modalState$.subscribe(state => {
            if (state.isOpened) {
                this.modalService.open(AlertComponent);
            }
        });

        this.subscription.add(subscription);
    }

    openAlert() {
        this.store.dispatch(AlertModalStoreActions.openModal({
            title: 'Alert !!',
            content: 'This is alert demo !'
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
