import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import {
  addEntity,
  removeEntity,
  setEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, mergeMap, pipe, switchMap, tap } from 'rxjs';
import { ResourceDataService } from './resource.data';
import { NewItemModel } from '../types';

export type NewsItemEntity = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type NewsItemCreateModel = Omit<NewsItemEntity, 'id'>;

export type NewsItemListModel = NewItemModel & { pending: boolean };
export const ResourceStore = signalStore(
  withEntities({ collection: '_serverData', entity: type<NewsItemEntity>() }), // my server data
  withEntities({ collection: '_outbox', entity: type<NewsItemEntity>() }), // my outbox
  withDevtools('resource-store'),
  withComputed((store) => {
    return {
      newsItems: computed(() => {
        const serverItems = store
          ._serverDataEntities()
          .map((s) => ({ ...s, pending: false }) as NewsItemListModel);
        const outboxItems = store
          ._outboxEntities()
          .map((s) => ({ ...s, pending: true }) as NewsItemListModel);

        return [...outboxItems, ...serverItems];
      }),
      newsItemCount: computed(() => store._serverDataEntities().length),
      newsItemPendingCount: computed(() => store._outboxEntities().length),
    };
  }),
  withMethods((store) => {
    const service = inject(ResourceDataService);
    return {
      addNewsItem: rxMethod<NewsItemCreateModel>(
        pipe(
          map((item) => {
            const tempId = crypto.randomUUID();
            const outboxItem = { ...item, id: tempId } as NewsItemEntity;
            patchState(store, addEntity(outboxItem, { collection: '_outbox' }));
            return {
              tempId,
              item,
            };
          }),
          mergeMap((work) =>
            service
              .addNewsResource(work.item, work.tempId)
              .pipe(
                tap((r) =>
                  patchState(
                    store,
                    addEntity(r.item, { collection: '_serverData' }),
                    removeEntity(r.tempId, { collection: '_outbox' }),
                  ),
                ),
              ),
          ),
        ),
      ),
      _load: rxMethod<void>(
        pipe(
          switchMap(() =>
            service
              .getNewsItems()
              .pipe(
                tap((r) =>
                  patchState(
                    store,
                    setEntities(r, { collection: '_serverData' }),
                  ),
                ),
              ),
          ),
        ),
      ),
    };
  }),

  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
