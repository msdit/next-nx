import { FC } from 'react'

interface ITextTitleValueProps {
    title: string
    value: string
}

const TextTitleValue: FC<ITextTitleValueProps> = (props) => {
    const { title, value } = props
    return (
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="text-neutral-600">{title}:</span>{' '}
            <span className="font-bold">{value}</span>
        </p>
    )
}

export default TextTitleValue
