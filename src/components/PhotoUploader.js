import React, {Component} from 'react'

export default class  PhotoUploader extends Component {

  constructor(props) {
   super(props);
  }

  onAddImage(){
    const photoURL = document.getElementById('uploadFile').value
    const photoDesc = document.getElementById('photoDesc').value

    if(photoURL){
        let photo = {
            id: Math.random().toString(36).substr(2, 5) + ".jpg" ,
            description: photoDesc,
            url: photoURL
        }
        this.props.onAddPhoto(photo)
      }
    }
      render() {
        return (
            <div className="photo-selector">
            <input id="photoDesc" placeholder="Photo description" />
              <input id="uploadFile" placeholder="Click Add to add Photo"/>
                <div className="fileUpload btn btn-primary">
                  <span>Add Photo</span>
                    <input id="uploadBtn" type="file" className='upload'
                                          onClick={() => this.onAddImage()} />
                </div>
            </div>
        )}
      }
