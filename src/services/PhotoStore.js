/*Photo Store containing initial images */
export default class PhotoStore {
  constructor() {
  this._photoAlbumImages = [
    {
      id:1,
      description: "Ant Man" ,
      url:  "https://i.annihil.us/u/prod/marvel/i/mg/5/d0/54ad72b6084a0.jpg",
      likes:5
    },
    {
      id:2,
      description: "Wolverine In Action" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg" ,
      likes:0
    },
    {
      id:3,
      description: "Captain Marvel" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/6/30/537ba61b764b4.jpg",
      likes:0
    },
    {
      id:4,
      description: "Spider Man" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg",
      likes:0
    },
    {
      id:5,
      description: "Doctor Strange" ,
      url: "https://i.annihil.us/u/prod/marvel/i/mg/1/30/537ba85979532.jpg" ,
      likes:0
    }
    ],
  this.selectedImage = {
    id:1,
    description: "Ant Man" ,
    url:  "https://i.annihil.us/u/prod/marvel/i/mg/5/d0/54ad72b6084a0.jpg",
    likes:5
  }
}

ImageException(message) {
          this.message = message;
          this.name = 'ImageNotProvidedException';

 }

ImageGetException(message) {
           this.message = message;
           this.name = 'ImageNotFoundException';
}



fetchPhotosFromStore(){
  return new Promise((resolve,reject) => {
    const data = this._photoAlbumImages ;
      setTimeout(() => {
        resolve(data)},
        1000) ;
  });
}

fetchSelectedPhotoFromStore(){
  return this._photoAlbumImages[0];
}

fetchPhotoById(id){
  return this._photoAlbumImages.find((element) => element.id === id );
}

addPhotoToStore(photo){
    if(!photo) {
    	throw new ImageException('Cannot add,Image provided is null')
    }
    this._photoAlbumImages.push(photo);
}

deletePhotoFromStore(id){
     if(id){
        let photoDeleted = this._photoAlbumImages.findIndex((img) => img.id === id);
        if(photoDeleted !== null)
        this._photoAlbumImages.splice(photoDeleted , 1);
        else
        throw new ImageGetException('Cannot Find Image in Store');
      }
 }

deletePhotoFromStore1(id){
  if(id){
    let photoDeleted;
    for (let i = this._photoAlbumImages.length; i--;) {
        if (this._photoAlbumImages[i].id === id) {
            photoDeleted =i;
            break;
        }
      }
      if(photoDeleted){
          this._photoAlbumImages.splice(i, 1);
      }
      else{
          throw new ImageGetException('Cannot Find Image in Store');
      }
    }
 }

likePhoto(id){
  if(id){
    let photoLikedIndex = this._photoAlbumImages.findIndex((img) => img.id === id);
    const imageToBeLiked = this.fetchPhotoById(id);
    imageToBeLiked.likes = imageToBeLiked.likes + 1 ;
    this._photoAlbumImages[photoLikedIndex] = imageToBeLiked ;
    this.selectedImage[photoLikedIndex] = imageToBeLiked ;
  }
}

unlikePhoto(id){
  if(id){
    let photoUnlikedIndex = this._photoAlbumImages.findIndex((img) => img.id === id);
    const imageToBeUnliked = fetchPhotoById(id);
    imageToBeUnliked.likes = imageToBeUnliked.likes + 1 ;
    this._photoAlbumImages[photoUnlikedIndex] = imageToBeUnliked ;
  }
}

}
