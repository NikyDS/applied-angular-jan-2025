import { http, HttpResponse, delay } from 'msw';
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
  {
    id: '4',
    title: "Rainer's YouTube",
    description: 'Good Stuff',
    link: 'https://developer.mozilla.org/en-US/',
  },
];

export const NewsHandlers = [
  http.get('https://prod32.hypertheory.com/api/news', async () => {
    await delay(2000);
    return HttpResponse.json(fakeNewsItems);
  }),
];
