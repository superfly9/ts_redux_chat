//state의 type을 체크할 interface
export interface SystemState {
    loggedIn: boolean
    sessing: string
    userName: string
}

//Type Checking Actions & Action Creators
export const UPDATE_SESSION = 'UPDATE_SESSION';

//Action creator(actions.ts의 updateSession)의 return 타입(리듀서에 넘겨줄 형태)을 정의하는 interface
interface UpdateSessionAction {
    type:typeof UPDATE_SESSION
    payload : SystemState
}

export type SystemActionTypes = UpdateSessionAction