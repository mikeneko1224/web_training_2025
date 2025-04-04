'use client'

import { FC } from 'react'
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { LastPage } from './LastPage'
import { ProgressBar } from './PrgoressBar'
import MyImage from '@/components/MyImage'
import { ImageModel } from '@/models/image.model'
import { CloseIcon, TateyomiLogo } from '@/utils/images'
import {
    ControlUIProp,
    EmbeddedElement,
    Image,
    Orientation,
    Viewer,
} from '@link-u/ginzan'
import clsx from 'clsx'

const ControlUI: React.FC<ControlUIProp> = (props) => {
    return (
        <>
            <Header {...props} />
            {/* <Footer {...props} /> */}
            <Footer {...props} />
        </>
    )
}

type HeaderProp = {
    visible: boolean
    viewerOrientation: Orientation
    viewerOrientationDispatch: React.Dispatch<React.SetStateAction<Orientation>>
}

const Header: React.FC<HeaderProp> = (props) => {
    const params = useParams()
    const url = `/title/${params.id}`

    return (
        <div
            className={clsx(
                'fixed top-0 z-10 h-[62px] w-full  bg-[#333] opacity-[0.8] transition-all',
                !props.visible ? 'translate-y-[-100%]' : 'translate-y-[0%]'
            )}
        >
            <Link href={url}>
                <MyImage image={CloseIcon} className='my-[15px] ml-[62px]' />
            </Link>
        </div>
    )
}

const Footer: React.FC<ControlUIProp> = (props) => {
    return (
        <div
            className={clsx(
                'fixed bottom-0 z-10 h-[62px] w-full  bg-[#333] transition-all',
                !props.visible ? 'translate-y-[100%]' : 'translate-y-[0%]'
            )}
        >
            <div className='flex'>
                <ProgressBar {...props} />
                <div className='my-[14px]'>
                    <button
                        onClick={() => {
                            props.viewerOrientation == 'horizontal'
                                ? props.viewerOrientationDispatch('vertical')
                                : props.viewerOrientationDispatch('horizontal')
                        }}
                    >
                        <MyImage image={TateyomiLogo} />
                    </button>
                </div>
            </div>
        </div>
    )
}

type Props = {
    pages: ImageModel[]
    lastpage: number
}

export const ViewComic: FC<Props> = ({ pages, lastpage }) => {
    const mangaImage: Image[] = pages.map((page) => {
        return {
            type: 'image',
            src: page.src,
            size: { width: page.width, height: page.height },
            widthRatio: 0.8,
            spreadAllowance: 'wideScreenOnly',
        }
    })

    const lastPage: EmbeddedElement = {
        type: 'embedded_element',
        element: <LastPage lastpage={lastpage} />,
        side: 'center',
        spreadAllowance: 'wideScreenOnly',
    }

    return (
        <Viewer
            src={[...mangaImage, lastPage]}
            index={0}
            controlUI={ControlUI}
            orientation='horizontal'
            controlUIVisible={true}
            breakpoint={{ type: 'ratio', value: 1 }}
            beginWithBlankPage={false}
            rtl={true}
            centerizeFirstPage={false}
            centerizeLastPage={true}
        />
    )
}
