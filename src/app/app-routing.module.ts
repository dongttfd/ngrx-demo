import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
    { path: '', redirectTo: 'article', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent
    },
    {
        path: 'book', component: BookComponent
    },
    {
        path: 'article', component: ArticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
