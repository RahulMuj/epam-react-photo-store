import React, {Component} from 'react'

export class PhotoGalleryScroller extends Component {
   constructor(props) {
    super(props);
   }

   onSelectImage(photoId){
     this.props.onSelectPhoto(photoId)
   }

  render() {
    return (
      <div className="image-scroller">
          {this.props.store.map((image, index) => (
            <div key={index} onClick={() => this.onSelectImage(image.id)}>
              <img src={image.url}/>
            </div>
        ))}
      </div>
    )}
  }


export default PhotoGalleryScroller
