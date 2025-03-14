import React from 'react'
import { Divider } from '@/components/Divider'
import { getTitleDetail } from '@/features/title/api/get-title'
import { CommicSummary } from '@/features/title/components/CommicSummary'

const TitleDetail = async ({ params }: { params: { id: number } }) => {
    const model = await getTitleDetail(params.id)
    const { title, chapters, advertisement } = model

    return (
        <div>
            <CommicSummary title={title} />
            <Divider />
        </div>
    )
}

export default TitleDetail
