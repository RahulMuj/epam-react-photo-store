import React, {Component} from 'react'

export class  PhotoComment extends Component {
  render() {

    let photoCommentSection;
    if (this.props.store.length !== 0) {
      photoCommentSection = (
        <div className="content-panel-comment">
          <div className="container">
            <div className="dialogbox">
              <div className="body">
                <span className="tip tip-up"></span>
                  <div className="message">
                    <span>Awesome Image  </span>
                  </div>
              </div>
             </div>

          <div className="dialogbox">
            <div className="body">
              <span className="tip tip-up"></span>
                <div className="message">
                  <span>My favourite comic hero!!</span>
                </div>
            </div>
          </div>
        </div>
        <div className="comment-box">
  		    <textarea rows="2" name="comment" id="comment" placeholder="Write a Comment...">
          </textarea>
          <button className='btn btn-secondary image-save-btn' onClick=''>Add Comment
          </button>
          </div>
      </div>
      )
     }

    return (
      <div>
        {photoCommentSection}
      </div>
        )}
  }

export default PhotoComment
