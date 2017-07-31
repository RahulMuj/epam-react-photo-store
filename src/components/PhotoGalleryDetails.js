import React, {Component} from 'react'
import PhotoGalleryLikes from './PhotoLikes'

export default class  PhotoGalleryDetails extends Component {

  constructor(props){
      super(props);
  }

  static defaultProps = {
    className: 'image-like-btn-thumbnail'
  }

  render() {
    const {store,selectedphoto,onAddLike} = this.props;
    let photoThumbnail;
    if (this.props.store.length !== 0 || typeof this.props.store == "undefined" ) {
      photoThumbnail = (
        <div>
          {this.props.store.map((image, index) => (
            <div key={index} className="image-editor">
              <img src={image.url}/>
                <span className ='image-dec'> {image.description}
                </span>
                
            </div>
            ))}
        </div>
      )
     }
     else {
        photoThumbnail = (
        <h2 className="emptyStore"> Damn , Your Photo Store is empty !!! Add new photos to view here</h2>
          )
     }
        return (
          <div>
            {photoThumbnail}
          </div>
        )}
  }
