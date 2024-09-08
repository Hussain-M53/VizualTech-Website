import { pageType } from './documents/Home.js'
import {projectType} from './documents/project.jsx'
import { serviceType } from './documents/service.jsx'
import { testimonialType } from './documents/testimonial.jsx'
import {valueType} from './documents/values.jsx'
import { collectionGroupType } from './objects/collection/collectionGroupType.js'
import { collectionLinksType } from './objects/collection/collectionLinksType.js'
import { customProductOptionColorObjectType } from './objects/customProductOption/customProductOptionColorObjectType.jsx'
import { customProductOptionColorType } from './objects/customProductOption/customProductOptionColorType.jsx'
import { customProductOptionSizeObjectType } from './objects/customProductOption/customProductOptionSizeObjectType.js'
import { customProductOptionSizeType } from './objects/customProductOption/customProductOptionSizeType.js'
import { imageWithProductHotspotsType } from './objects/hotspot/imageWithProductHotspotsType.js'
import { productHotspotsType } from './objects/hotspot/productHotspotsType.jsx'
import { spotType } from './objects/hotspot/spotType.jsx'
import { linkEmailType } from './objects/link/linkEmailType.jsx'
import { linkExternalType } from './objects/link/linkExternalType.jsx'
import { linkInternalType } from './objects/link/linkInternalType.jsx'
import { accordionGroupType } from './objects/module/accordionGroupType.js'
import { accordionType } from './objects/module/accordionType.js'
import { callToActionType } from './objects/module/callToActionType.jsx'
import { collectionReferenceType } from './objects/module/collectionReferenceType.jsx'
import { gridItemType } from './objects/module/gridItemType.js'
import { gridType } from './objects/module/gridType.js'
import { heroType } from './objects/module/heroType.jsx'
import { imageCallToActionType } from './objects/module/imageCallToActionType.jsx'
import { imageFeaturesType } from './objects/module/imageFeaturesType.jsx'
import { imageFeatureType } from './objects/module/imageFeatureType.js'
import { instagramType } from './objects/module/instagramType.js'
import { productFeaturesType } from './objects/module/productFeaturesType.jsx'
import { productReferenceType } from './objects/module/productReferenceType.jsx'
import { seoType } from './objects/seoType.js'
import { portableTextSimpleType } from './portableText/portableTextSimpleType.jsx'
import { portableTextType } from './portableText/portableTextType.jsx'

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
