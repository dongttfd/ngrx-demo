import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { StateMap } from './core/state';
import { openModal } from './core/state/modal.actions';
import { FeatureKey, ModalState } from './core/state/modal.reducer';
import { AlertComponent } from './shared/components/alert/alert.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

    modalState$: Observable<ModalState>;
    subscription = new Subscription();

    constructor(
        private store: Store<StateMap>,
        private config: NgbModalConfig,
        private modalService: NgbModal
    ) {
        this.modalState$ = this.store.select(FeatureKey);
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
        this.store.dispatch(openModal({
            title: 'Alert !!',
            content: 'This is alert demo !'
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
