'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const Detail = async () => {
    const searchParams = useSearchParams()
    console.log(typeof searchParams)

    return <div>{searchParams}</div>
}

export default Detail
