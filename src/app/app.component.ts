import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from './core/state';
import * as ModalActions from './core/state/modal.actions';
import { FeatureKey, State } from './core/state/modal.reducer';
import { AlertComponent } from './shared/alert/alert.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

    modalState$: Observable<State>;
    subscription = new Subscription();

    constructor(
        private store: Store<fromRoot.State>,
        private config: NgbModalConfig,
        private modalService: NgbModal
    ) {
        this.modalState$ = this.store.pipe(select(FeatureKey));
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
        this.store.dispatch(new ModalActions.OpenModal({
            title: 'Alert !!',
            content: 'This is alert demo !'
        }));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
