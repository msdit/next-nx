import { createElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RSP } from 'apps/site/redux/reducers'
import { useRouter } from 'next/router'
import {
    updateUserLoading,
    updateUsername,
} from 'apps/site/redux/actions/userActions'
import { IUserStateProps } from 'apps/site/redux/reducers/userReducer'
import { decodeToken, getToken } from '@msdit/shared/utility'

const withAuth =
    (ComposedComponent, type: 'LOGIN' | 'DASHBOARD') => (props) => {
        const router = useRouter()
        const dispatch = useDispatch()
        const user = useSelector<RSP, IUserStateProps>((state) => state.user)

        useEffect(() => {
            const token = getToken()
            const { username } = decodeToken(token)
            if (username !== user.username) dispatch(updateUsername(username))
            if (user.userLoading) dispatch(updateUserLoading(false))
        }, [user])

        if (user.userLoading) return <div>Loading...</div>
        if (user.username && type === 'LOGIN') {
            router.push('/dashboard')
            return <div />
        }
        if (!user.username && type === 'DASHBOARD') {
            router.push('/login')
            return <div />
        }

        return createElement(ComposedComponent, props)
    }

export default withAuth
