import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models';
import { loremRandomWords } from 'src/app/core/helper';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    articles$: Observable<Article[]>;

    constructor(
        private articleService: ArticleService
    ) {
        this.articles$ = this.articleService.entities$;
    }

    ngOnInit() {
        this.articleService.getAll();
    }

    generateArticle() {
        this.articleService.add({
            id: null,
            title: loremRandomWords(null, null, 5),
            content: loremRandomWords(null, null, 10)
        });
    }

    toDelete(id: number) {
        this.articleService.delete(id);
    }
}
