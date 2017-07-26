import React, {Component} from 'react'
import PhotoStore from '../services/PhotoStore.js'

export class  PhotoDelete extends Component {

  constructor(props){
    super(props);
    this.store = new PhotoStore();
    this.onDeletePhoto = this.onDeletePhoto.bind(this);
  }

  onDeletePhoto(){
    this.props.onDeletePhoto(this.props.selectedphoto.id)
  }

  render() {
    let photoDeleteSection;
    if (this.props.store.length !== 0) {
      photoDeleteSection = (
        <div className="image-del-btn">
          <span><button className='btn btn-secondary' onClick={this.onDeletePhoto} title="Delete Photo">
            <img /></button>
          </span>
         </div>
      )
     }

    return (
      <div>
      {photoDeleteSection}
       </div>
        )}
  }

export default PhotoDelete
