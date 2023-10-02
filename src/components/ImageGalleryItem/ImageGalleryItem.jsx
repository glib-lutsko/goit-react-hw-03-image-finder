export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} onClick={() => openModal(largeImageURL)} />
    </li>
  );
};
