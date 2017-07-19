import React from 'react'
import './HomeView.scss'
import Gallery from '../../../components/PhotoGalleryList'
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import reducer from '../../../store/reducerDummy'

/*Store that consumes reducer and provides dispatcher that dispatches actions */
const store = createStore(reducer);

export const HomeView = () => (
  <div className="imageHolder">
    <h4> Your Photo Album </h4>
    <Provider store={store}>
      <Gallery />
    </Provider>
    <div style={{ margin: '0 auto' }} >
      <h2 className="label-holder">Manage Your PhotoAlbum Store:</h2>
      <div>
      <div className="photo-selector">
      <input id="uploadFile" placeholder="Click Add to add Photo" disabled="disabled" />
        <div className="fileUpload btn btn-primary">
          <span>Add Photo</span>
          <input id="uploadBtn" type="file" className='upload' onClick='' />
        </div>
        <div className="">
        <button className='btn btn-secondary' onClick=''>
          Delete Photo
        </button>
        </div>
      </div>

      </div>
    </div>
  </div>
)

export default HomeView
