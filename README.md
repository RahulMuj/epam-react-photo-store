Photo Album Store with React

PhotoStore.js acts as central Photo Store.
PageLayout.js acts as React Header Component carrying any links if required.
HomeView.js acts as Central React Component that wraps various child components.
	 a) PhotoGalleryDetails.js component shows list of Thumbnail images from the store.

	 b) ManagePhotoGallery.js renders image from Album store with detailed description of images and options to add , delete or edit 	     images.It contains below child components:
		1. PhotoSingleThumbnail.js renders Thumbail image as selected from list.
		2. PhotoGalleryScroller.js renders list of images from Store , user can select different images to view its details from 		    scroller.
		3. PhotoDeleteButton.js renders delete button and help to remove selected image from Store.
		4. PhotoGalleryLikes.js renders likes button and help to like a selected image.
		5. PhotoComment.js renders comment section for selected images.
		6. PhotoUploader renders photo add option to the Photo Store. 
		
Note: Currently i am not using Redux layer to my project so Containers, Reducer are still not in picture, everything done above is in pure react.		
	



