import React from 'react'
import { Divider } from '@/components/Divider'
import { getTitleDetail } from '@/features/title/api/get-title'
import { Chapter } from '@/features/title/components'
import { Information } from '@/features/title/components'
import { Book } from '@/features/title/components'
import { CommicSummary } from '@/features/title/components/CommicSummary'

const TitleDetail = async ({ params }: { params: { id: number } }) => {
    const model = await getTitleDetail(params.id)
    const { title, chapters, advertisement } = model

    return (
        <div>
            <CommicSummary title={title} />
            <Divider />
            <Chapter chapters={chapters} />
            <Divider />
            <Information advertisement={advertisement} />
            <Divider />
            <Book title={title} />
        </div>
    )
}

export default TitleDetail
