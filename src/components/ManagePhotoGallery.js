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

  onAddLike(photoId){
    this.props.onAddLike(photoId);
  }

  onDeletePhoto(photoId){
    this.props.onDeletePhoto(photoId);
  }

  onSelectPhoto(photoId){
    this.props.onSelectPhoto(photoId);
  }


  render() {
    const {store,selectedphoto,onSelectPhoto , onDeletePhoto , onAddLike} = this.props;
    return (
      <div>
          <PhotoUploader />
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
          />
          <PhotoComment store= {store}
                        selectedphoto = {selectedphoto}
           />
      </div>
    )}
}

export default ManagePhotoGallery
