import styles from '../styles/SelectedVideo.module.css'
import { Button } from '@mui/material';

const SelectedVideo = ({ selectedVideo }) => {
  return (
    <section className={styles.section}>
        <img src={selectedVideo.image} alt="portada-video" className={styles.imagevideo} />
      <h3 className={styles.category}>{selectedVideo.category}</h3>
            <h2 className={styles.title}>{selectedVideo.title}</h2>
      <p className={styles.description}>{selectedVideo.description}</p>
      <a href={selectedVideo.urlVideo} target="_blank" rel="noreferrer">
      <Button className={styles.button} variant="outlined">Ver video</Button>
      </a>
    </section>
  );
};

export default SelectedVideo;
