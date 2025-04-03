import MyImage from '@/components/MyImage'
import { CloseIcon } from '@/utils/images'
import { Orientation, ZoomDispatch } from '@link-u/ginzan'

type HeaderProp = {
    visible: boolean
    zoomDispatch: ZoomDispatch
    viewerOrientation: Orientation
    viewerOrientationDispatch: React.Dispatch<React.SetStateAction<Orientation>>
}

export const ViewerHeader: React.FC<HeaderProp> = (props) => {
    return (
        <div
            style={{
                transform: `translateY(${!props.visible ? '-100%' : '0'})`,
            }}
            className='fixed top-[62px] h-[62px] w-[100%] bg-white'
        >
            <p>headerが入ります。</p>
            <MyImage image={CloseIcon} />
        </div>
    )
}
