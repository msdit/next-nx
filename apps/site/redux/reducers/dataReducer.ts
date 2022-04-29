import { dataType } from 'apps/site/templates/DashboardTemplate/types'
import * as types from '../actionTypes'

export interface IDataStateProps {
    userList: dataType[]
}

const dataInitialState: IDataStateProps = {
    userList: [
        {
            name: 'masoud',
            email: 'maghaie148@gmail.com',
            joinDate: new Date('2021/11/12'),
        },
        {
            name: 'test1',
            email: 'test1@gmail.com',
            joinDate: new Date('2022/1/2'),
        },
        {
            name: 'test2',
            email: 'test2@gmail.com',
            joinDate: new Date('2022/3/4'),
        },
    ],
}

export function dataReducer(state = dataInitialState, action: any) {
    const { type, payload } = action

    switch (type) {
        case types.ADD_DATA: {
            const { user } = payload
            return { ...state, userList: [...state.userList, user] }
        }
        case types.EDIT_DATA: {
            const { user } = payload
            const userIdx = state.userList.findIndex(
                (u) => u.email === user.email
            )
            const newList = [...state.userList]
            newList[userIdx] = { ...newList[userIdx], ...user }
            return { ...state, userList: newList }
        }
        case types.REMOVE_DATA: {
            const { email } = payload
            return {
                ...state,
                userList: state.userList.filter((u) => u.email !== email),
            }
        }
        default:
            return state
    }
}
