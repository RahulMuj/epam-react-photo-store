import React, {Component} from 'react'
import PhotoGalleryScroller from './PhotoGalleryScroller'
import PhotoSingleThumbnail from './PhotoGalleryThumbnail'
import PhotoUploader  from './PhotoUploader'
import PhotoComment  from './PhotoComments'
import PhotoGalleryLikes from './PhotoLikes'
import PhotoDeleteButton from './PhotoDelete'

export class ManagePhotoGallery extends Component {

  constructor(props){
        super(props);
  }

  static defaultProps = {
    className: 'image-like-btn'
  }

  render() {
    const {store,selectedphoto,onSelectPhoto , onDeletePhoto , onAddLike , onAddPhoto} = this.props;
    return (
      <div>
          <PhotoUploader store= {store}
                        onAddPhoto ={onAddPhoto}

           />
          <PhotoSingleThumbnail store= {store}
                                selectedphoto = {selectedphoto}
          />
          <PhotoGalleryScroller store= {store}
                                selectedphoto = {selectedphoto}
                                onSelectPhoto = {onSelectPhoto}
          />
          <PhotoDeleteButton store= {store}
                                selectedphoto = {selectedphoto}
                                onDeletePhoto = {onDeletePhoto}
          />
          <PhotoGalleryLikes store= {store}
                             selectedphoto = {selectedphoto}
                             onAddLike = {onAddLike}
                             className = {this.props.className }
          />
          <PhotoComment store= {store}
                        selectedphoto = {selectedphoto}
           />
      </div>
    )}
}

export default ManagePhotoGallery
