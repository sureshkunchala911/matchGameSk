import './index.css'

const ImageItem = props => {
  const {imageDetails, setActiveImageId} = props
  const {thumbnailUrl, id} = imageDetails

  const onClickCardImage = () => {
    setActiveImageId(id)
  }

  return (
    <li className="imagesList">
      <button type="button" className="butt" onClick={onClickCardImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="imageSizing" />
      </button>
    </li>
  )
}

export default ImageItem
