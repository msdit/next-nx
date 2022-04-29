import { FC } from 'react'
import { Button, Input } from '@msdit/shared/ui'
import { useForm } from '@msdit/shared/utility'
import { useDispatch } from 'react-redux'
import { editData } from 'apps/site/redux/actions/dataActions'

interface IEditUserFormProps {
    name: string
    email: string
    handleClose: () => void
}

const EditUserForm: FC<IEditUserFormProps> = (props) => {
    const { name: defaultName = '', email, handleClose } = props

    const { formFields, createChangeHandler, resetForm } = useForm({
        name: defaultName,
    })

    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(editData({ ...formFields, email }))
        handleClose()
        resetForm()
    }

    function handleCancle(e: React.FormEvent) {
        e.preventDefault()
        handleClose()
        resetForm()
    }

    return (
        <div className="mb-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center md:items-end"
            >
                <Input
                    className="w-full md:w-auto md:flex-1 md:mr-4"
                    type="text"
                    id="name"
                    label="name"
                    value={formFields.name}
                    onChange={createChangeHandler('name')}
                />
                <Input
                    className="w-full md:w-auto md:flex-1 md:mr-4"
                    type="email"
                    id="email"
                    label="email"
                    disabled
                    value={email}
                />

                <div className="flex flex-row justify-center items-center w-full md:w-auto">
                    <Button
                        className="mr-4 flex-1 md:grow-0"
                        type="submit"
                        disabled={formFields.name === ''}
                    >
                        Edit
                    </Button>
                    <Button
                        className="flex-1 md:grow-0"
                        onClick={handleCancle}
                        varient="bordered"
                    >
                        Cancle
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditUserForm
