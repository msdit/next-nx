import * as types from '../actionTypes'

interface updateUsernameType {
    type: 'UPDATE_USER'
    payload: { username?: string }
}

interface updateUserLoadingType {
    type: 'UPDATE_USER_LOADING'
    payload: { userLoading: boolean }
}

type dispatchTypes = updateUsernameType | updateUserLoadingType

export const updateUsername = (username: string): dispatchTypes => ({
    type: types.UPDATE_USER,
    payload: { username },
})

export const updateUserLoading = (userLoading: boolean): dispatchTypes => ({
    type: types.UPDATE_USER_LOADING,
    payload: { userLoading },
})
