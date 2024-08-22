import { CloseIcon, ImageIcon, LinkRemovedIcon } from '@sanity/icons'
import React, { forwardRef, useState } from 'react'
import Image from 'next/image'

type Props = {
  isActive?: boolean
  isDeleted: boolean
  type: 'collection' | 'product' | 'productVariant'
  url: string
  title: string
}

// Adding display name for the component
const ShopifyDocumentStatus = forwardRef<HTMLDivElement, Props>(function ShopifyDocumentStatus(props, ref) {
  const { isActive, isDeleted, type, url, title } = props

  const [imageVisible, setImageVisible] = useState(true)

  // Hide image on error / 404
  const handleImageError = () => setImageVisible(false)

  return (
    <div
      ref={ref}
      style={{
        alignItems: 'center',
        borderRadius: 'inherit',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
        position: 'relative' // Ensure position relative for child absolute positioning
      }}
    >
      {imageVisible && url ? (
        <Image
          src={`${url}&width=400`}
          alt={`${title} preview`}
          layout="fill" // Cover the parent div
          objectFit="contain"
          onError={handleImageError}
        />
      ) : (
        <ImageIcon style={{ position: 'absolute' }} />
      )}

      {/* Item has been deleted */}
      {isDeleted ? (
        <CloseIcon
          style={{
            background: 'rgba(255, 0, 0, 0.7)',
            color: 'rgba(255, 255, 255, 0.85)',
            height: '100%',
            width: '100%',
            position: 'absolute', // Absolute positioning to cover parent div
            top: 0,
            left: 0,
          }}
        />
      ) : (
        <>
          {/* Products only: item is no longer active */}
          {type === 'product' && !isActive && (
            <LinkRemovedIcon
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'rgba(255, 255, 255, 0.85)',
                height: '100%',
                width: '100%',
                position: 'absolute', // Absolute positioning to cover parent div
                top: 0,
                left: 0,
              }}
            />
          )}
        </>
      )}
    </div>
  )
})

export default ShopifyDocumentStatus
