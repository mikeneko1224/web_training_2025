'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const Detail = async () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    return <div>{id}</div>
}

export default Detail
