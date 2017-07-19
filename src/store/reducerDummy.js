
/*reducer to hold initial (default) state of our
application and listens for actions.*/

const defaultState = {
  images: [
    {
      key:1,
      description: "Mountain View France" ,
      url:  "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
      likes:5
    },
    {
      key:2,
      description: "Scenary View Paris" ,
      url: "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg" ,
      likes:0
    },
    {
      key:3,
      description: "Forest View China" ,
      url: "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg" ,
        likes:0
    },
    {
      key:4,
      description: "River View HongKong" ,
      url: "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg" ,
        likes:0
    },
    {
      key:5,
      description: "Random View at Random" ,
      url: "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg" ,
        likes:0
    }
    ],
  selectedImage:{
    key:1,
    description: "Mountain View France" ,
    url: "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
      likes:5 
   }
}

export default function images(state = defaultState, action) {
  switch(action.type) {
    case 'FIND_PHOTOS':
      console.log(state, action)
      return {...state, selectedImage: action.image};
         default:
          return state;
  }
}
