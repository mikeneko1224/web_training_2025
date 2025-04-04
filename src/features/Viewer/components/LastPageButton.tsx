import { FC } from 'react'
import Link from 'next/link'

type LastPageButtonProps = {
    titleId: number
    title: string
    lastpage: number
}

export const LastPageButton: FC<LastPageButtonProps> = (props) => {
    return props.title === '感想を書く' ? (
        <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] bg-[#F9E384] py-[8px]'></button>
    ) : (
        <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] py-[8px]'>
            <Link href={`/title/${props.titleId}`}>{props.title}</Link>
        </button>
    )
}
