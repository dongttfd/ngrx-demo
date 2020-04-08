import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Article } from 'src/app/shared/models';

@Injectable({
    providedIn: 'root'
})

export class ArticleService extends EntityCollectionServiceBase<Article> {

    constructor(
        public serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
        super('Article', serviceElementsFactory);
    }

}
