import { createElement } from 'react'
import { FC, HTMLAttributes } from 'react'

/* eslint-disable-next-line */
export interface ContainerProps extends HTMLAttributes<Element> {
    component?: string
}

export const Container: FC<ContainerProps> = (props) => {
    const { component = 'div', className = '', children, ...otherProps } = props
    return createElement(
        'div',
        {
            className: `mx-auto container px-4 ${className}`,
            ...otherProps,
        },
        children
    )
}

export default Container
