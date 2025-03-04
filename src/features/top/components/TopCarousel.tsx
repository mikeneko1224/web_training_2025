'use client'

import React, { FC, useState } from 'react'
import MyImage from '@/components/MyImage'
import { BannerModel } from '@/models/banner.model'
import clsx from 'clsx'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

type Props = {
    banners: BannerModel[]
}

export const TopCarousel: FC<Props> = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: {
                perView: 1,
                spacing: 0,
            },
            breakpoints: {
                '(min-width: 768px)': {
                    slides: {
                        origin: 'center',
                        perView: 2.5,
                        spacing: 0,
                    },
                },
            },
            slideChanged(slide) {
                setCurrentSlide(slide.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                const clearNextTimeout = () => {
                    clearTimeout(timeout)
                }
                const nextTimeout = () => {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on('dragStarted', clearNextTimeout)
                slider.on('animationEnded', nextTimeout)
            },
        ]
    )
    return (
        <div className='relative'>
            {
                // バナー箇所のコンポーネント
                // eslint-disable-next-line tailwindcss/no-custom-classname
                <div ref={sliderRef} className='keen-slider'>
                    {banners.map((banner, index) => (
                        // eslint-disable-next-line tailwindcss/no-custom-classname
                        <div key={index} className='keen-slider__slide'>
                            <MyImage
                                key={index}
                                image={banner.image}
                                className={clsx(
                                    'w-full',
                                    currentSlide === index
                                        ? 'opacity-100'
                                        : 'opacity-30'
                                )}
                            />
                        </div>
                    ))}
                </div>
            }
            {
                // インディケータのコンポーネント
                loaded && instanceRef.current && (
                    <div className='absolute bottom-3 left-1/2 flex -translate-x-1/2 justify-center gap-2'>
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ),
                        ].map((_, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    instanceRef.current?.moveToIdx(index)
                                }
                                className={clsx(
                                    'h-2 w-2 cursor-pointer rounded-full',
                                    currentSlide === index
                                        ? 'bg-[#6DC2ED]'
                                        : 'bg-[#E8E8E8]'
                                )}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    )
}
