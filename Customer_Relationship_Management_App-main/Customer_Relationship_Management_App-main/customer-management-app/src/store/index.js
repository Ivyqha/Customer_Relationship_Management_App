import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers'
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const initializeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = configureStore({
        reducer,
        //preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    })

    sagaMiddleware.run(rootSaga);

    return store;
}

export default initializeStore;