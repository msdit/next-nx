import { combineReducers } from 'redux'
import { dataReducer, IDataStateProps } from './dataReducer'
import { userReducer, IUserStateProps } from './userReducer'

const reducers = {
    data: dataReducer,
    user: userReducer,
}

export type RSP = {
    data: IDataStateProps
    user: IUserStateProps
}

export default combineReducers(reducers)
