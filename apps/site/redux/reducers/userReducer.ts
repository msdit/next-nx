import * as types from '../actionTypes'

export interface IUserStateProps {
    username?: string
    userLoading: boolean
}

const userInitialState: IUserStateProps = {
    userLoading: true,
}

export function userReducer(state = userInitialState, action: any) {
    const { type, payload } = action

    switch (type) {
        case types.UPDATE_USER_LOADING: {
            const { userLoading } = payload
            return { ...state, userLoading }
        }
        case types.UPDATE_USER: {
            const { username } = payload
            return { ...state, username }
        }
        default:
            return state
    }
}
