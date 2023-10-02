export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className="gallery-item">
      <img
        src={webformatURL}
        alt="picture"
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
