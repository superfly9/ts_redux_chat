//state의 type을 체크할 interface
export interface Message {
    user: string
    message: string
    timestamp: number
}
export interface ChatState {
    messages: Message[]
}

//Type Checking Actions & Action Creators
//typeof => 자동으로 타입 추론 위해 사용
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

//Action creator의 return 타입을 정의하는 interface들
interface SendMessasgeAction {
    type: typeof SEND_MESSAGE
    payload: Message
}

interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE
    meta: {
        timestamp : number
    }
}

//액션의 타입을 다른 파일에서 쓰기 위해 export
export type ChatActionTypes = SendMessasgeAction | DeleteMessageAction