import MyImage from '@/components/MyImage'
import { errorBackground, errorGirl } from '@/utils/images'

export default function NotFound() {
    return (
        <div className='flex '>
            <div>エラーが発生しました。時間をおいて再度お試しください。</div>
            <div className='relative'>
                <MyImage image={errorBackground} />
                <div className='absolute top-3'>
                    <MyImage image={errorGirl} />
                </div>
            </div>
        </div>
    )
}
