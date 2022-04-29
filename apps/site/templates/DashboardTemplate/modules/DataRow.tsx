import { FC, useState } from 'react'
import crypto from 'crypto'
import { gregorianToJalali } from 'shamsi-date-converter'
import { dataType } from '../types'
import TextTitleValue from './TextTitleValue'
import { useDispatch } from 'react-redux'
import { removeData } from 'apps/site/redux/actions/dataActions'
import EditUserForm from './EditUserForm'

function getAvatar(email: string): string {
    const emailHash = crypto
        .createHash('md5')
        .update(email.trim().toLowerCase())
        .digest('hex')
    return new URL(`avatar/${emailHash}?s=48`, 'https://www.gravatar.com').href
}

interface IDataRowProps extends dataType {}

const DataRow: FC<IDataRowProps> = (props) => {
    const { name, email, joinDate } = props

    const dispatch = useDispatch()
    const [isEditFormShow, setIsEditFormShow] = useState(false)

    const handleRemove = () => {
        dispatch(removeData(email))
    }

    const handleEdit = () => {
        setIsEditFormShow(true)
    }

    const handleClose = () => {
        setIsEditFormShow(false)
    }

    return (
        <div className="bg-white shadow-md my-4 px-6 py-4 rounded-md w-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-between items-start md:items-center w-full md:w-auto md:flex-1">
                    <img
                        className="rounded-full shadow"
                        src={getAvatar(email)}
                        alt={name}
                    />
                    <div className="flex-1 flex flex-col md:flex-row md:flex-1 md:justify-between md:items-center mx-4 max-w-[calc(100%_-_80px)]">
                        <TextTitleValue title="name" value={name} />
                        <TextTitleValue title="email" value={email} />
                        <TextTitleValue
                            title="join"
                            value={gregorianToJalali(joinDate).join('/')}
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <p
                        onClick={handleRemove}
                        className="text-red-700 text-sm px-4 py-2 cursor-pointer"
                    >
                        remove
                    </p>{' '}
                    |{' '}
                    <p
                        onClick={handleEdit}
                        className="text-blue-700 text-sm px-4 py-2 cursor-pointer"
                    >
                        edit
                    </p>
                </div>
            </div>
            {isEditFormShow && (
                <EditUserForm {...props} handleClose={handleClose} />
            )}
        </div>
    )
}

export default DataRow
