import { FC, useEffect } from 'react'
import { dataType } from './types'
import DataRow from './modules/DataRow'
import { useDispatch, useSelector } from 'react-redux'
import { RSP } from 'apps/site/redux/reducers'
import AddUserForm from './modules/AddUserForm'
import { decodeToken, getToken } from '@msdit/shared/utility'
import { updateUsername } from 'apps/site/redux/actions/userActions'

interface IDashboardTemplateProps {}

const DashboardTemplate: FC<IDashboardTemplateProps> = () => {
    const {
        user,
        data: { userList },
    } = useSelector<RSP, RSP>((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        const token = getToken()
        const { username } = decodeToken(token)
        if (username !== user.username) dispatch(updateUsername(username))
        // this dipendency simulate all http request
    }, [userList])

    return (
        <>
            <AddUserForm />
            <div className="clear-both">
                {userList.length > 0 ? (
                    userList.map((u: dataType) => (
                        <DataRow key={u.email} {...u} />
                    ))
                ) : (
                    <p className="text-neutral-400 text-sm mx-auto text-center ">
                        List is empty!
                    </p>
                )}
            </div>
        </>
    )
}

export default DashboardTemplate
