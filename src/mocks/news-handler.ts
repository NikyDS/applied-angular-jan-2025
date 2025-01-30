import { http, HttpResponse, delay } from 'msw';
import {
  NewsItemCreateModel,
  NewsItemEntity,
} from '../app/resources/services/resource.store';
const fakeNewsItems = [
  {
    id: '1',
    title: 'Ngrx Site',
    description: 'Signal store, store, effects, all that',
    link: 'https://ngrx.io',
  },
  {
    id: '2',
    title: 'Angular',
    description: 'The official Angular Site',
    link: 'https://angular.dev',
  },
  {
    id: '3',
    title: 'Mock Service Workers',
    description: 'Tool for Intercepting and Faking Http Calls',
    link: 'https://mswjs.io',
  },
];

export const NewsHandlers = [
  http.get('https://prod32.hypertheory.com/api/news', async () => {
    await delay(2000);
    return HttpResponse.json(fakeNewsItems);
  }),
  http.post('https://prod32.hypertheory.com/api/news', async ({ request }) => {
    await delay(5000);
    const body = (await request.json()) as unknown as NewsItemCreateModel;
    const newItem = { ...body, id: crypto.randomUUID() } as NewsItemEntity;
    fakeNewsItems.push(newItem);
    return HttpResponse.json(newItem);
  }),
];
