import React from 'react'
import './HomeView.scss'
import ManagePhotoGallery from '../../../components/ManagePhotoGallery'
import PhotoStore from '../../../services/PhotoStore.js'
import PhotoGalleryDetails from '../../../components/PhotoGalleryDetails'
import PhotoThumbnailHolder from '../../../components/PhotoThumbnailHolder'

export default class  HomeView  extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        photoAlbumStore : [],
        selectedphoto: [],
        deleteFlag :false
      };
      this.store = new PhotoStore();
      this.addLikes = this.addLikes.bind(this);
      this.onDeletePhoto = this.onDeletePhoto.bind(this);
      this.onSelectPhoto = this.onSelectPhoto.bind(this);
      this.onAddPhoto = this.onAddPhoto.bind(this);
    }


  addLikes(photoId){
    this.store.likePhoto(photoId);
    this.store.fetchPhotosFromStore()
    .then( (data) => {
    this.setState({
      photoAlbumStore : data,
      selectedphoto : this.store.fetchSelectedPhotoFromStore(),
    })
  });
 }

  onDeletePhoto(photoId){

      this.store.deletePhotoFromStore(photoId);
      this.store.fetchPhotosFromStore()
      .then( (data) => {
      this.setState({
        photoAlbumStore : data,
        selectedphoto : this.store.fetchSelectedPhotoFromStore(),
        deleteFlag : true
      })
    });
  }

  onSelectPhoto(photoId){
      this.setState({
        selectedphoto : this.store.fetchPhotoById(photoId),
      })
  }

  componentDidMount(){
      this.store.fetchPhotosFromStore()
      .then( (data) => {
      this.setState({
        photoAlbumStore : data,
        selectedphoto : this.store.fetchSelectedPhotoFromStore(),
      })
    });
  }


  onAddPhoto(photo){
      this.store.addPhotoToStore(photo);
      this.store.fetchPhotosFromStore()
      .then( (data) => {
      this.setState({
        photoAlbumStore : data,
        selectedphoto : this.store.fetchSelectedPhotoFromStore()
      })
    });
  }

  render() {
    const {store,onAddPhoto} = this.props;
    let  content
    if (this.state.photoAlbumStore.length > 0) {
        content =(
        <div className="imageHolder">
          <div className="thumbnailHolder">
            <h2 className="content-panel">PhotoAlbum Store</h2>
              <PhotoGalleryDetails  store = {this.state.photoAlbumStore}
                                     selectedphoto = {this.state.selectedphoto}
                                     onAddLike = {this.addLikes}
              />
          </div>
          <div className="manageAlbumHolder">
            <h2 className="label-holder content-panel">Manage Your PhotoAlbum Store</h2>

                <ManagePhotoGallery store = {this.state.photoAlbumStore}
                                    selectedphoto = {this.state.selectedphoto}
                                    onAddLike = {this.addLikes}
                                    onDeletePhoto = {this.onDeletePhoto}
                                    onSelectPhoto  = {this.onSelectPhoto}
                                    onAddPhoto = {this.onAddPhoto}
                />
            </div>
            </div>
      )
    }
    else{
      if(this.state.deleteFlag){
        content = (
          <div>
          <h2 className="emptyStore"> Damn , Your Photo Store is empty !!! Add new photos to view here</h2>
          <div className="manageAlbumHolder">
            <h2 className="label-holder content-panel">Manage Your PhotoAlbum Store</h2>

                <ManagePhotoGallery store = {this.state.photoAlbumStore}
                                    selectedphoto = {this.state.selectedphoto}
                                    onAddLike = {this.addLikes}
                                    onDeletePhoto = {this.onDeletePhoto}
                                    onSelectPhoto  = {this.onSelectPhoto}
                                    onAddPhoto = {this.onAddPhoto}
                />
            </div>
           </div>
        )
      }
      else{
      content = (<span>Loading........</span>)
      }
    }
    return (
      <div>
     { content}
    </div>
 )}
}
