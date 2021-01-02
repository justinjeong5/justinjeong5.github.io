import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';

function ProductImage() {

  const { currentProduct } = useSelector(state => state.jaymall);
  const [images, setImages] = useState([])

  useEffect(() => {
    if (currentProduct) {
      const imagesMapper = currentProduct.images.map((value) => {
        return ({
          original: value.image,
          thumbnail: value.image
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
