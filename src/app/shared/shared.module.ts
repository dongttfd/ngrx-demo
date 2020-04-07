import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
    declarations: [AlertComponent, ConfirmComponent],
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [NgbModule, FormsModule, ReactiveFormsModule, HttpClientModule, AlertComponent],
})
export class SharedModule {}
