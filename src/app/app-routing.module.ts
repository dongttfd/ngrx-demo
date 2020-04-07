import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent
    },
    {
        path: 'book', component: BookComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
