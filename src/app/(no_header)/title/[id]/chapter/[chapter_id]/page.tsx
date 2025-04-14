import React from 'react'
import { Metadata } from 'next'
import { getViewer } from '@/features/Viewer/api/get-viewer'
import { ViewComic } from '@/features/Viewer/components/ViewComic'
import { getTitleDetail } from '@/features/title/api/get-title'

export const generateMetadata = async ({
    params,
}: {
    params: { id: number }
}): Promise<Metadata> => {
    const model = await getTitleDetail(params.id)
    const { title } = model

    return {
        title: `${title.name} | ガンガンONLINE`,
        description: title.description,
        icons: { icon: '/favicon.png' },
    }
}

const Viewer = async ({ params }: { params: { chapter_id: number } }) => {
    const model = await getViewer(params.chapter_id)
    const { pages, lastpage } = model

    return (
        <div
            className='flex flex-col gap-2 pb-9'
            style={{ backgroundColor: '#333' }} //tailwindで反応しなかったため、styleで記載
        >
            <ViewComic pages={pages} lastpage={lastpage} />
        </div>
    )
}

export default Viewer
