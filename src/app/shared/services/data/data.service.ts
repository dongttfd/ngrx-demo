import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book, Article } from 'src/app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    createDb() {
        const books: Book[] = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        const articles: Article[] = [
            { id: 11, title: 'Dr Nice', content: 's' },
            { id: 12, title: 'Dr Nice', content: 's' },
        ];

        return { books, articles };
    }

    genId(books: Book[]): number {
        return books.length > 0 ? Math.max(...books.map(hero => hero.id)) + 1 : 11;
    }
}
