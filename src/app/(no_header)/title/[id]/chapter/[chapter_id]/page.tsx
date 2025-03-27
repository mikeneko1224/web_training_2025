import React from 'react'
import { getViewer } from '@/features/Viewer/api/get-viewer'
import { ViewComic } from '@/features/Viewer/components/ViewComic'

const Viewer = async ({ params }: { params: { chapter_id: number } }) => {
    const model = await getViewer(params.chapter_id)
    const { pages, lastpage } = model

    return (
        <div className='flex flex-col gap-2 bg-[#333] pb-9'>
            <ViewComic pages={pages} lastpage={lastpage} />
        </div>
    )
}

export default Viewer
