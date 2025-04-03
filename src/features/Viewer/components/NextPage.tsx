import { FC } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Props = {
    lastpage: number
    titleId: number
}

export const NextPage: FC<Props> = (props) => {
    const url = `/title/${props.titleId}/chapter/${props.lastpage}`

    return (
        props.lastpage && (
            <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] py-[8px]'>
                <Link href={url}>次の話へ</Link>
            </button>
        )
    )
}
