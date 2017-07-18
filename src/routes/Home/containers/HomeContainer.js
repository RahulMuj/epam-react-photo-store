import { connect } from 'react-redux'
import Home from '../components/HomeView'

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
