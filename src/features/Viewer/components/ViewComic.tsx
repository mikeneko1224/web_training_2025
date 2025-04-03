'use client'

import { FC } from 'react'
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { LastPage } from './LastPage'
import MyImage from '@/components/MyImage'
import { ImageModel } from '@/models/image.model'
import { CloseIcon, GALogo, TateyomiLogo, catLogo } from '@/utils/images'
import {
    ControlUIProp,
    EmbeddedElement,
    Image,
    Orientation,
    SeekBar,
    VerticalSeekBar,
    Viewer,
    ViewerHeaderProps,
    ZoomDispatch,
} from '@link-u/ginzan'

const ControlUI: React.FC<ControlUIProp> = (props) => {
    return (
        <>
            <Header />
            <VerticalFooter {...props} />
            <Footer {...props} />
        </>
    )
}

type HeaderProp = {
    visible: boolean
    viewerOrientation: Orientation
    viewerOrientationDispatch: React.Dispatch<React.SetStateAction<Orientation>>
}

const Header = () => {
    const params = useParams()
    const url = `http://localhost:3000/title/${params.id}`

    return (
        <div className='fixed top-0 z-10 h-[62px] w-full  bg-[#333] opacity-[0.8]'>
            <Link href={url}>
                <MyImage image={CloseIcon} className='my-[15px] ml-[62px]' />
            </Link>
        </div>
    )
}

const Footer: React.FC<ControlUIProp> = (props) => {
    const visible = props.visible && props.viewerOrientation == 'horizontal'
    return (
        <div
            className='fixed bottom-0 z-10 h-[62px] w-full bg-[#333] px-[62px]'
            style={{ transform: `translateY(${!visible ? '100%' : '0'})` }}
        >
            <div className='flex'>
                <div
                    className='w-[90%]'
                    style={{
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#6FBAF0',
                        backgroundColor: '#6FBAF0',
                        margin: 28,
                        height: 6,
                        position: 'relative',
                    }}
                >
                    <SeekBar {...props}>
                        <div
                            style={{
                                position: 'absolute',
                                right: `${
                                    100 * props.pageIndexState.seekBarRatio
                                }%`,
                                transform: 'translate(50%,-50%)',
                                padding: 10,
                                zIndex: 10,
                            }}
                        >
                            <div
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderColor: '#6FBAF0',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderRadius: '50%',
                                    backgroundColor: '#6FBAF0',
                                    color: 'transparent',
                                }}
                            >
                                .
                            </div>
                        </div>
                    </SeekBar>
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: '#A5A5A5',
                            width: `${
                                100 * (1 - props.pageIndexState.seekBarRatio)
                            }%`,
                            height: '100%',
                            color: 'transparent',
                            zIndex: 5,
                            top: 0,
                        }}
                    >
                        .
                    </div>
                </div>
                <div className='my-[14px]'>
                    <button
                        onClick={() => {
                            props.viewerOrientationDispatch('vertical')
                        }}
                        disabled={props.viewerOrientation == 'vertical'}
                    >
                        <MyImage image={TateyomiLogo} />
                    </button>
                </div>
            </div>
        </div>
    )
}

const VerticalFooter: React.FC<ControlUIProp> = (props) => {
    const visible = props.visible && props.viewerOrientation == 'vertical'
    return (
        <div
            className='fixed bottom-0 z-10 h-[62px] w-full bg-[#333] px-[62px]'
            style={{ transform: `translateY(${!visible ? '100%' : '0'})` }}
        >
            <div className='flex'>
                <div
                    className='w-[90%]'
                    style={{
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#6FBAF0',
                        backgroundColor: '#6FBAF0',
                        margin: 28,
                        height: 6,
                        position: 'relative',
                    }}
                >
                    <SeekBar {...props}>
                        <div
                            style={{
                                position: 'absolute',
                                right: `${
                                    100 * props.pageIndexState.seekBarRatio
                                }%`,
                                transform: 'translate(50%,-50%)',
                                padding: 10,
                                zIndex: 10,
                            }}
                        >
                            <div
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderColor: '#6FBAF0',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderRadius: '50%',
                                    backgroundColor: '#6FBAF0',
                                    color: 'transparent',
                                }}
                            >
                                .
                            </div>
                        </div>
                    </SeekBar>
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: '#A5A5A5',
                            width: `${
                                100 * (1 - props.pageIndexState.seekBarRatio)
                            }%`,
                            height: '100%',
                            color: 'transparent',
                            zIndex: 5,
                            top: 0,
                        }}
                    >
                        .
                    </div>
                </div>
                <div className='my-[14px]'>
                    <button
                        onClick={() => {
                            props.viewerOrientationDispatch('vertical')
                        }}
                        disabled={props.viewerOrientation == 'vertical'}
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
        return { type: 'image', src: page.src }
    })

    const lastPage: EmbeddedElement = {
        type: 'embedded_element',
        element: <LastPage lastpage={lastpage} />,
    }

    const [panDisabled, setPanDisabled] = React.useState<boolean>(false)

    return (
        <Viewer
            src={[...mangaImage, lastPage]}
            controlUI={ControlUI}
            orientation='horizontal'
            controlUIVisible={true}
            breakpoint={{ type: 'ratio', value: 1 }}
            beginWithBlankPage={false}
            rtl={true}
            panDisabled={panDisabled}
        />
    )
}
