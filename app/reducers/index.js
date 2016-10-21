import { combineReducers } from 'redux'
import main from './home'
import page from './community'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import { loadingBarReducer } from 'react-redux-loading-bar'


export default combineReducers({
    reduxAsyncConnect,
    page,
    main,
    loadingBar: loadingBarReducer
})