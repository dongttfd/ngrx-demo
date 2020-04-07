import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserComponent, UserModalComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UserModule { }
