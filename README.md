# ngrx-store-reset

[![npm version](https://badge.fury.io/js/ngrx-store-reset.svg)](https://badge.fury.io/js/ngrx-store-reset)

@ngrx/store meta reducer to reset the state.

## Installation

```sh
npm i --save ngrx-store-reset
```

OR

```sh
yarn add ngrx-store-reset
```

## Usage

### 1. Setup

```ts
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { storeReset } from 'ngrx-store-reset';

import { ActionTypes } from './actions';

export interface State {
  // reducer interfaces
}

export const reducers: ActionReducerMap<State> = {
  // reducers
}

// Pass your action type (the one you'd like to reset the state) to the metareducer
export const storeResetReducer = storeReset({ action: ActionTypes.Logout });

export const metaReducers: MetaReducer<State>[] = [storeResetReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
  ]
})
export class AppModule {}
```

#### Options

- `action`: specify the action to listen for to reset the state (defaults to `RESET_STORE`).

### 2. Resetting the state

Just dispatch your action, the metareducer will do the job.

```ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Logout } from './actions';

@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
    constructor(private store: Store<State>) {}

    logout() {
        this.store.dispatch(new Logout());
    }
}
```
