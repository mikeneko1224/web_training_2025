import { ViewerModel } from '../models/viewer.model'
import { Proto } from '@/generated/protocol'
import { ImageTranslator } from '@/translators/image.translator'

export const ViewerTranslator = {
    translate: (proto: Proto.IViewerView): ViewerModel => {
        return {
            pages:
                proto.pages?.map((page) => ImageTranslator.translate(page)) ??
                [],

            lastpage: proto.lastpage as number,
        }
    },
}
