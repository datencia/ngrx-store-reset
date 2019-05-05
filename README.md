# ngrx-store-reset
@ngrx/store meta reducer to reset the state.

## Installation

```sh
npm i --save ngrx-store-reset
```

OR

```sh
yarn add ngrx-store-reset
```

## Setup

```ts
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { storeReset } from 'ngrx-store-reset';

export interface State {
  // reducer interfaces
}

export const reducers: ActionReducerMap<State> = {
  // reducers
}

export const storeResetReducer = storeReset({ action: 'RESET_STORE' });

export const metaReducers: MetaReducer<State>[] = [storeResetReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
  ]
})
export class AppModule {}
```

### Options

- `action`: specify the action to listen for to reset the state.
