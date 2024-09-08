import { pageType } from './documents/Home'
import {projectType} from './documents/project'
import { serviceType } from './documents/service'
import { testimonialType } from './documents/testimonial'
import {valueType} from './documents/values'
import { imageWithProductHotspotsType } from './objects/hotspot/imageWithProductHotspotsType'
import { productHotspotsType } from './objects/hotspot/productHotspotsType'
import { spotType } from './objects/hotspot/spotType'
import { linkEmailType } from './objects/link/linkEmailType'
import { linkExternalType } from './objects/link/linkExternalType'
import { linkInternalType } from './objects/link/linkInternalType'
import { accordionGroupType } from './objects/module/accordionGroupType'
import { accordionType } from './objects/module/accordionType'
import { callToActionType } from './objects/module/callToActionType'
import { gridItemType } from './objects/module/gridItemType'
import { gridType } from './objects/module/gridType'
import { heroType } from './objects/module/heroType'
import { imageCallToActionType } from './objects/module/imageCallToActionType'
import { imageFeaturesType } from './objects/module/imageFeaturesType'
import { imageFeatureType } from './objects/module/imageFeatureType'
import { instagramType } from './objects/module/instagramType'
import { productFeaturesType } from './objects/module/productFeaturesType'
import { productReferenceType } from './objects/module/productReferenceType'
import { seoType } from './objects/seoType'
import { portableTextSimpleType } from './portableText/portableTextSimpleType'
import { portableTextType } from './portableText/portableTextType'

const objects = [
    accordionGroupType,
    accordionType,
    callToActionType,
    // footerType,
    gridItemType,
    gridType,
    heroType,
    imageCallToActionType,
    imageFeaturesType,
    imageFeatureType,
    imageWithProductHotspotsType,
    instagramType,
    productFeaturesType,
    productHotspotsType,
    productReferenceType,
    seoType,
    spotType,
  ] 

const blocks = [portableTextType, portableTextSimpleType]
const annotations = [linkEmailType, linkExternalType, linkInternalType]
const documents = [projectType, serviceType,valueType,testimonialType,pageType]

export const schemaTypes = [ ...objects,...annotations,...blocks,...documents]
