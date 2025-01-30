import { Feature_Handlers } from './features-handler';
import { NewsHandlers } from './news-handler';

export const handlers = [...NewsHandlers, ...Feature_Handlers];
