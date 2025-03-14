'use client'

import { usePathname } from 'next/navigation'

export const Share = () => {
    const pathname = usePathname()

    return pathname
}
