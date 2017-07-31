import React, {Component} from 'react'

export default class PhotoGalleryThumbnail extends Component {

  constructor(props) {
    super(props);
   }
   handleThumbClick(selectedImage) {
     this.setState({
       selectedImage
     })
   }

    render() {
      const {store,selectedphoto,onSelectPhoto , onDeletePhoto , onAddLike} = this.props;
      let photoThumbnail;
      if (this.props.store.length !== 0) {
        photoThumbnail = (
          <div className="image-gallery">
            <div className="gallery-image">
              <div>
                <img src={this.props.selectedphoto.url}/>
                <span className="content-panel-desc">{this.props.selectedphoto.description}
                </span>
              </div>
            </div>
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
          { photoThumbnail}
        </div>
      )}
}
