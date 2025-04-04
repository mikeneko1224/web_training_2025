import { FC } from 'react'
import { SeekBar, SeekbarProp } from '@link-u/ginzan'

export const ProgressBar: FC<SeekbarProp> = (props) => {
    return (
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
                        right: `${100 * props.pageIndexState.seekBarRatio}%`,
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
                    width: `${100 * (1 - props.pageIndexState.seekBarRatio)}%`,
                    height: '100%',
                    color: 'transparent',
                    zIndex: 5,
                    top: 0,
                }}
            >
                .
            </div>
        </div>
    )
}
