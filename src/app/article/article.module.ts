import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
    declarations: [ArticleComponent],
    imports: [
        CommonModule,
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [
        {
            provide: DefaultDataServiceConfig, useValue: {
                root: 'http://localhost/api/',
                timeout: 3000,
                entityHttpResourceUrls: {
                    Article: {
                        entityResourceUrl: 'http://localhost/api/articles/',
                        collectionResourceUrl: 'http://localhost/api/articles/',
                    }
                }
            }
        }
    ]
})
export class ArticleModule { }
