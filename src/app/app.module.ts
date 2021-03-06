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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/services';
import { ArticleModule } from './article/article.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientInMemoryWebApiModule
            .forRoot(DataService, { dataEncapsulation: false, delay: 200 }),

        RootStoreModule,
        SharedModule,
        UserModule,
        BookModule,
        ArticleModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
