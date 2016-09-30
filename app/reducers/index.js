import { combineReducers } from 'redux'
import main from './home'
import page from './community'

export default combineReducers({
    page,
    main
})