import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NewsItemCreateModel, NewsItemEntity } from './resource.store';
import { map } from 'rxjs';

export class ResourceDataService {
  #client = inject(HttpClient);

  getNewsItems() {
    return this.#client.get<NewsItemEntity[]>(
      'https://prod32.hypertheory.com/api/news',
    );
  }

  addNewsResource(item: NewsItemCreateModel, tempId: string) {
    return this.#client
      .post<NewsItemEntity>('https://prod32.hypertheory.com/api/news', item)
      .pipe(map((r) => ({ item: r, tempId })));
  }
}
