import React, {Component} from 'react'

import PhotoGalleryLikes from './PhotoLikes'
import PhotoGalleryDetails from './PhotoGalleryDetails'

export class PhotoThumbnailHolder extends Component {

  constructor(props){
        super(props);
  }

  static defaultProps = {
    className: 'image-like-btn'
  }


  render() {
    const {store,selectedphoto,onSelectPhoto , onDeletePhoto , onAddLike} = this.props;
    return (
      <div>
          <PhotoGalleryDetails  store = {store}
                                selectedphoto = {selectedphoto}
          />
          <PhotoGalleryLikes store= {store}
                                 selectedphoto = {selectedphoto}
                                 onAddLike = {onAddLike}
                                 className = {this.props.className }
          />
      </div>
    )}
}

export default PhotoThumbnailHolder
