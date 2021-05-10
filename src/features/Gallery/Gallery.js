import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Tile, Grid, GalleryImg } from "./Gallery.styles"

const Gallery = ({ imgList }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const images = imgList.map(image => image.node.publicURL)

  return (
    <React.Fragment>
      <Grid>
        {imgList.map((image, index) => (
          <Tile
            key={`gallery-img-${index}`}
            onClick={() => {
              setLightboxOpen(!isLightboxOpen)
              setImageIndex(index)
            }}
          >
            <GalleryImg fluid={image.node.childImageSharp.fluid} />
          </Tile>
        ))}
      </Grid>
      <FsLightbox
        toggler={isLightboxOpen}
        sources={images}
        sourceIndex={imageIndex}
      />
    </React.Fragment>
  )
}

export default Gallery
