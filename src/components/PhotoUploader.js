import React, {Component} from 'react'

export default class  PhotoUploader extends Component {
      render() {
        return (
            <div className="photo-selector">
              <input id="uploadFile" placeholder="Click Add to add Photo" disabled="disabled" />
                <div className="fileUpload btn btn-primary">
                  <span>Add Photo</span>
                    <input id="uploadBtn" type="file" className='upload' onClick='' />
                </div>
            </div>
        )}
      }
