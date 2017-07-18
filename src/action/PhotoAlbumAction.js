export const FIND_PHOTOS = 'FIND_PHOTOS';

export function selectImage(image) {
  return {
    type: FIND_PHOTOS,
    image
  }
}
