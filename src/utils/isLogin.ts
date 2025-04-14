'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function useIsLoggedIn(): [
    boolean,
    Dispatch<SetStateAction<boolean>>
] {
    const [isLoggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const hasCookie = document.cookie.includes('session_key')
        setLoggedIn(hasCookie)
    }, [])

    return [isLoggedIn, setLoggedIn]
}
