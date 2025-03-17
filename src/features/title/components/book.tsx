import React, { FC } from 'react'
import Link from 'next/link'
import MyImage from '@/components/MyImage'
import { TitleModel } from '@/models/title.model'
import {
    AmazonIcon,
    DenshiIcon,
    RakutenIcon,
    SevenNetIcon,
} from '@/utils/images'

type Props = {
    title: TitleModel
}

export const Book: FC<Props> = ({ title }) => {
    return (
        <div className='mx-auto flex max-w-5xl gap-[16px] py-[32px]'>
            <div className='flex w-[504px] flex-col gap-[13px]'>
                <div className='text-[24px] font-[600]'>単行本</div>
                <div className='flex gap-[20px]'>
                    <MyImage
                        className='w-[210px]'
                        image={title.volume.thumbnail}
                    />
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='text-[20px] font-[700]'>
                                {title.volume.name}
                            </div>
                            <div className='text-[18px] font-[700] text-[#6B6B6B]'>
                                {title.volume.catchPhrase}
                            </div>
                            <div className='text-[16px] font-[400] text-[#6B6B6B]'>
                                {title.volume.description}
                            </div>
                            <div className='text-[15px] font-[500] text-[#6B6B6B]'>
                                {title.volume.releaseDate}
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex gap-[8px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <Link href='https://www.amazon.co.jp/?&tag=hydraamazonav-22&ref=pd_sl_7ibq2d37on_e&adgrpid=157529192841&hvpone=&hvptwo=&hvadid=675114138690&hvpos=&hvnetw=g&hvrand=9040093036559772465&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196044&hvtargid=kwd-10573980&hydadcr=27922_14701883&gad_source=1'>
                                        <MyImage image={AmazonIcon} />
                                    </Link>
                                    <Link href='https://books.rakuten.co.jp/'>
                                        <MyImage image={RakutenIcon} />
                                    </Link>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <Link href='https://7net.omni7.jp/top?utm_source=google&utm_medium=cpc&utm_campaign=7ns_A02_A0101_KW&utm_term=e_7net&gad_source=1&gclid=Cj0KCQjw7dm-BhCoARIsALFk4v_pua0A-U5iXPtIKsfOryJRfeFPmnx8qv8qHPXYqC1PrQiibjgHzj8aAoGiEALw_wcB'>
                                        <MyImage image={SevenNetIcon} />
                                    </Link>
                                    <MyImage image={DenshiIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='rounded-sm border border-[#D9D9D9] py-[16px]'>
                    感想を送る
                </button>
            </div>
            <div className='flex w-[504px] flex-col gap-[13px]'>
                <div className='text-[24px] font-[600]'>関連書籍</div>
                <div className='flex gap-[20px]'>
                    <MyImage
                        className='w-[210px]'
                        image={title.relatedVolume.thumbnail}
                    />
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='text-[20px] font-[700]'>
                                {title.relatedVolume.name}
                            </div>
                            <div className='text-[18px] font-[700] text-[#6B6B6B]'>
                                {title.relatedVolume.catchPhrase}
                            </div>
                            <div className='text-[16px] font-[400] text-[#6B6B6B]'>
                                {title.relatedVolume.description}
                            </div>
                            <div className='text-[15px] font-[500] text-[#6B6B6B]'>
                                {title.relatedVolume.releaseDate}
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex gap-[8px]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <Link href='https://www.amazon.co.jp/?&tag=hydraamazonav-22&ref=pd_sl_7ibq2d37on_e&adgrpid=157529192841&hvpone=&hvptwo=&hvadid=675114138690&hvpos=&hvnetw=g&hvrand=9040093036559772465&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196044&hvtargid=kwd-10573980&hydadcr=27922_14701883&gad_source=1'>
                                        <MyImage image={AmazonIcon} />
                                    </Link>
                                    <Link href='https://books.rakuten.co.jp/'>
                                        <MyImage image={RakutenIcon} />
                                    </Link>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <Link href='https://7net.omni7.jp/top?utm_source=google&utm_medium=cpc&utm_campaign=7ns_A02_A0101_KW&utm_term=e_7net&gad_source=1&gclid=Cj0KCQjw7dm-BhCoARIsALFk4v_pua0A-U5iXPtIKsfOryJRfeFPmnx8qv8qHPXYqC1PrQiibjgHzj8aAoGiEALw_wcB'>
                                        <MyImage image={SevenNetIcon} />
                                    </Link>
                                    <MyImage image={DenshiIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
