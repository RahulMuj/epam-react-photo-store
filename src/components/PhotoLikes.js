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
        <div className= {this.props.className }>
          <span>
            <button className='btn btn-secondary' title='Like Photo'
              onClick= {this.onLikesClicked}><img /></button>
          </span>
          <span className="likeNumber">{this.props.selectedphoto.likes}
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
