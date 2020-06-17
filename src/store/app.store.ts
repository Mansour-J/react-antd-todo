import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todoSlice } from 'store/todo';

const reduxPersistConfig: PersistConfig<any> = {
  key: 'application',
  storage: storage,
  stateReconciler: autoMergeLevel2
};



export const rootReducer = combineReducers({
  todo: todoSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const pReducer = persistReducer(reduxPersistConfig, rootReducer);

export const store: Store = createStore(pReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
