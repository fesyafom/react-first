import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import promisesMiddleware from '../middlewares/promises'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(promisesMiddleware)
    );
    
    return store
}