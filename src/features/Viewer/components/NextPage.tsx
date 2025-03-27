import { FC } from 'react'
import { useParams } from 'next/navigation'

type Props = {
    lastpage: number
}

export const NextPage: FC<Props> = ({ lastpage }) => {
    const params = useParams()
    const url = `http://localhost:3000/title/${params.id}/chapter/${lastpage}`

    return lastpage != null ? (
        <button className='px-auto w-[256px] rounded-sm border border-[#D9D9D9] py-[8px]'>
            <a href={url}>次の話へ</a>
        </button>
    ) : (
        <></>
    )
}
