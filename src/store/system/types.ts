//state의 type을 체크할 interface
export interface SystemState {
    loggedIn: boolean
    sessing: string
    userName: string
}

//Type Checking Actions & Action Creators