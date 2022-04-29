import { dataType } from 'apps/site/templates/DashboardTemplate/types'
import * as types from '../actionTypes'

interface addDataType {
    type: 'ADD_DATA'
    payload: { user: dataType }
}

interface editDataType {
    type: 'EDIT_DATA'
    payload: { user: Omit<dataType, 'joinDate'> }
}

interface removeDataType {
    type: 'REMOVE_DATA'
    payload: { email: string }
}

type dispatchTypes = addDataType | editDataType | removeDataType

export const addData = (user: dataType): dispatchTypes => ({
    type: types.ADD_DATA,
    payload: { user },
})

export const editData = (user: Omit<dataType, 'joinDate'>): dispatchTypes => ({
    type: types.EDIT_DATA,
    payload: { user },
})

export const removeData = (email: string): dispatchTypes => ({
    type: types.REMOVE_DATA,
    payload: { email },
})
