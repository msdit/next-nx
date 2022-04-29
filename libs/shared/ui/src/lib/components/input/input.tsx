import { FC, InputHTMLAttributes } from 'react'

/* eslint-disable-next-line */
export interface InputProps extends Omit<InputHTMLAttributes<Element>, 'id'> {
    id: string
    label: string
}

export const Input: FC<InputProps> = (props) => {
    const { id, label, disabled, className = '', ...otherProps } = props
    return (
        <div className={className}>
            <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
            >
                {label}
            </label>
            <input
                className={`appearance-none block w-full border border-neutral-200 rounded py-3 px-4 mb-3 leading-tight  ${
                    disabled
                        ? 'bg-neutral-100 text-neutral-400'
                        : 'bg-neutral-200 focus:outline-none focus:bg-white focus:border-primary-600 '
                }`}
                {...{ disabled, ...otherProps }}
            />
        </div>
    )
}

export default Input
