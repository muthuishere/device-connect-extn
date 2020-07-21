import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage:storage,
};




export const store = (reducers) => {
    //const middlewares = [thunk,saveEnvironmentVariable];
    const middlewares = [thunk];
    const enhancer = applyMiddleware(...middlewares);
    const persistedReducer = persistReducer(persistConfig, reducers);

    // create store
    return createStore(persistedReducer, enhancer);
};

export const persistor = (reducers)=>{

    return persistStore(store(reducers));
}

