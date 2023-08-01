const SelectedVideo = ({selectedVideo}) => {
  return (
    <>
    <a href={selectedVideo.urlVideo} target="_blank">
    <img src={selectedVideo.image} alt="" /> </a>
    <h3>{selectedVideo.category}</h3>
      <div>Video temática seleccionada</div>
      <h2>{selectedVideo.title}</h2>
      <p>{selectedVideo.description}</p>
    </>
  );
};

export default SelectedVideo;
