import React from 'react'
import './HomeView.scss'
import ManagePhotoGallery from '../../../components/ManagePhotoGallery'
import PhotoStore from '../../../services/PhotoStore.js'
import PhotoGalleryDetails from '../../../components/PhotoGalleryDetails'

export default class  HomeView  extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        photoAlbumStore : [],
        selectedphoto: []
      };
      this.store = new PhotoStore();
      this.addLikes = this.addLikes.bind(this);
      this.onDeletePhoto = this.onDeletePhoto.bind(this);
      this.onSelectPhoto = this.onSelectPhoto.bind(this);
    }


  addLikes(photoId){
    console.log("From First Level",photoId);
    this.store.likePhoto(photoId);
    this.setState({
      photoAlbumStore : this.store.fetchPhotosFromStore(),
      selectedphoto : this.store.fetchPhotoById(photoId),
    })
    }

  onDeletePhoto(photoId){
      this.store.deletePhotoFromStore(photoId);
      let updatedPhotoAlbumStore = this.store.fetchPhotosFromStore();


      this.setState({
        photoAlbumStore : updatedPhotoAlbumStore ,
        selectedphoto :updatedPhotoAlbumStore[0]
      })
  }

  onSelectPhoto(photoId){
      this.setState({
        selectedphoto : this.store.fetchPhotoById(photoId),
      })
  }

  componentWillMount(){
    this.setState({
      photoAlbumStore : this.store.fetchPhotosFromStore(),
      selectedphoto : this.store.fetchSelectedPhotoFromStore(),
    });
  }

  render() {
    return (
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
            />
        </div>
    </div>
 )}
}
