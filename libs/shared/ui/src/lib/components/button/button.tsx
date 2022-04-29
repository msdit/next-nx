import { ButtonHTMLAttributes, FC } from 'react'

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<Element> {
    varient?: 'filled' | 'bordered'
}

export const Button: FC<ButtonProps> = (props) => {
    const { className = "", varient = 'filled', children, disabled, ...otherProps } = props
    return (
        <button
            className={`whitespace-nowrap border rounded-md font-bold focus:outline-none inline-flex items-center justify-center py-3 px-6 mb-3 leading-tight text-base transition duration-300 ${
                varient === 'filled'
                    ? disabled
                        ? 'text-neutral-400 bg-neutral-200 border-neutral-200'
                        : 'text-white bg-primary-600 border-primary-600 hover:bg-primary-800 cursor-pointer'
                    : disabled
                    ? 'text-neutral-400 border-neutral-200'
                    : 'text-primary-600 hover:text-primary-800 border-primary-600 hover:bg-[rgba(0,0,0,0.05)] hover:border-primary-800 cursor-pointer'
            } ${className}`}
            {...{ ...otherProps, disabled }}
        >
            {children}
        </button>
    )
}

export default Button
