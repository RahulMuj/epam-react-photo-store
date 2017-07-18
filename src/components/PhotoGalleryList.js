import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as PhotoAlbumActions from '../action/PhotoAlbumAction.js';

export class Gallery extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  handleThumbClick(selectedImage) {
    this.setState({
      selectedImage
    })
  }
  render() {
    const {images, selectedImage, selectImage} = this.props;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick={() => selectImage(image)}>
              <img src={image}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

/*mapped the store’s state to props*/
function mapStateToProps(state) {
  return {
    images: state.images ,
    selectedImage: state.selectedImage
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(PhotoAlbumActions, dispatch);
}

export default connect(mapStateToProps,mapActionCreatorsToProps)(Gallery)
