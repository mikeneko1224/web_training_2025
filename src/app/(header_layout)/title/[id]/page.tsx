import React from 'react'
import { Metadata } from 'next'
import { Divider } from '@/components/Divider'
import { getTitleDetail } from '@/features/title/api/get-title'
import { Chapter } from '@/features/title/components'
import { Information } from '@/features/title/components'
import { Book } from '@/features/title/components'
import { CommicSummary } from '@/features/title/components/CommicSummary'

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

const TitleDetail = async ({ params }: { params: { id: number } }) => {
    const model = await getTitleDetail(params.id)
    const { title, chapters, advertisement } = model
    const titleid = params.id

    return (
        <div>
            <CommicSummary title={title} />
            <Divider />
            <Chapter chapters={chapters} titleid={titleid} />
            <Divider />
            <Information advertisement={advertisement} />
            <Divider />
            <Book title={title} />
        </div>
    )
}

export default TitleDetail
