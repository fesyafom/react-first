import { combineReducers } from 'redux'
import main from './home'
import page from './community'
import { reducer as reduxAsyncConnect } from 'redux-connect'

export default combineReducers({
    reduxAsyncConnect,
    page,
    main
})