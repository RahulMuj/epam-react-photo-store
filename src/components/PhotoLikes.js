import React, {Component} from 'react'

export class  PhotoLikes extends Component {

  constructor(props){
    super(props);
    this.onLikesClicked = this.onLikesClicked.bind(this);
  }

  onLikesClicked(){
    this.props.onAddLike(this.props.selectedphoto.id );
  }

  render() {
    let photoLikeSection;
    if (this.props.store.length !== 0) {
      photoLikeSection = (
        <div className= 'image-like-btn'>
          <span>
            <button className='btn btn-secondary' title='Like Photo'
              onClick= {this.onLikesClicked}><img /></button>{this.props.selectedphoto.likes} people like this
          </span>
        </div>
      )
     }
    return (
      <div>
        { photoLikeSection }
      </div>
      )
    }
  }

export default PhotoLikes
