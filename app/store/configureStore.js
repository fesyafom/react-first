import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import promisesMiddleware from '../middlewares/promises'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(promisesMiddleware)
        
    );
    
    return store
}