import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RootStoreModule } from './store';
import { RequestInterceptor } from './core/request.interceptor';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        RootStoreModule,
        SharedModule,
        UserModule,
        BookModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
