import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import { SERVER_URL } from '../../../config/config'

function ProductImage() {

  const { currentProduct } = useSelector(state => state.jaymall);
  const [images, setImages] = useState([])

  useEffect(() => {
    if (currentProduct) {
      const imagesMapper = currentProduct.images.map((value) => {
        return ({
          original: `${SERVER_URL}/${value.image}`,
          thumbnail: `${SERVER_URL}/${value.image}`
        })
      })
      setImages(imagesMapper);
    }
  }, [currentProduct])

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  )
}

export default ProductImage
