import {combineReducers} from 'redux';
import {systemReducer} from './system/reducers'
import {chatReducer} from './chat/reducers'

const rootReducer = combineReducers({
    system : systemReducer,
    chat: chatReducer
})
export type RootState = ReturnType<typeof rootReducer>
//type vs typeof
//ReturnType의 사용법