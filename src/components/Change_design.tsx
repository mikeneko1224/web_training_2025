import React, { FC } from 'react'

export const NewDesign: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='h-screen bg-[#333]'>{children}</div>
}
