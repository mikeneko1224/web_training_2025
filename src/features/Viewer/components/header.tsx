import MyImage from '@/components/MyImage'
import { CloseIcon } from '@/utils/images'

export default function Header() {
    return (
        <div className='left-[0px] flex'>
            <div>header</div>
            <MyImage image={CloseIcon} />
        </div>
    )
}
