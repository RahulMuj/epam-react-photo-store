export const FIND_PHOTOS = 'FIND_PHOTOS';
export const INCREMENT_LIKES = 'INCREMENT_LIKES';

export function selectImage(image) {
  return {
    type: FIND_PHOTOS,
    image
  }
}

export function incrementLikes() {
  return {
    type: INCREMENT_LIKES,
    payload: 1
  }
}
