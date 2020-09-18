import { act } from 'react-dom/test-utils'
import {Message,ChatState,ChatActionTypes,SEND_MESSAGE,DELETE_MESSAGE} from './types'

const initialState: ChatState = {
    messages: []
}

export function chatReducer (
    state = initialState,
    action: ChatActionTypes
): ChatState { // reducer가 반환할 새로운 state의 type명시
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                messages: [...state.messages,action.payload]
            }
        case DELETE_MESSAGE:
            return {
                messages: state.messages.filter(message=>message.timestamp!==action.meta.timestamp)
            }
        default:
            return {...state}
    }
}