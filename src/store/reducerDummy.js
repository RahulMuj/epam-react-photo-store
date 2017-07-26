export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const DELETE_PHOTOS = 'DELETE_PHOTOS';

/*reducer to hold initial (default) state of our
application and listens for actions.*/
const defaultState = {
  images: [
    {
      key:1,
      description: "Ant Man" ,
      url:  "https://i.annihil.us/u/prod/marvel/i/mg/5/d0/54ad72b6084a0.jpg",
      likes:5
    },
    {
      key:2,
      description: "Wolverine In Action" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg" ,
      likes:0
    },
    {
      key:3,
      description: "Captain Marvel" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/6/30/537ba61b764b4.jpg",
      likes:0
    },
    {
      key:4,
      description: "Spider Man" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg",
      likes:0
    },
    {
      key:5,
      description: "Doctor Strange" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/1/30/537ba85979532.jpg" ,
      likes:0
    }
    ],
  selectedImage:{
    key:1,
    description: "Wolverine In Action" ,
    url: "https://i.annihil.us/u/prod/marvel/i/mg/5/d0/54ad72b6084a0.jpg",
    likes:5
  }

}

const ACTION_HANDLERS = {
  [INCREMENT_LIKES]    : (state, action) => state + action.payload
}

export default function images(state = defaultState, action) {
  switch(action.type) {
    case 'FIND_PHOTOS':
      console.log("Reducer",state, action)
      return {...state, selectedImage: action.image};
    case 'INCREMENT_LIKES':
      console.log("Reducer",state, action)
      state.selectedImage.likes= state.selectedImage.likes + action.payload;
      return {
        ...state ,selectedImage :state.selectedImage.likes
      };
    case 'DELETE_PHOTOS':
      console.log("Reducer",state, action)
      return {...state,image:action.image};


    default:
      return state;
  }
}
