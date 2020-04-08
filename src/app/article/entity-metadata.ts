import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Article } from 'src/app/shared/models';

const getArticleId = (article: Article) => article.id;

const entityMetadata: EntityMetadataMap = {
    Article: {
        entityName: 'Article',
        selectId: getArticleId,
    }
};

const pluralNames = {
    Article: 'Article'
};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};
