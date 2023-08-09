import styles from "../styles/VideoSelected.module.css";
import { Button } from "@mui/material";

const VideoSelected = ({ videoSelected }) => {
  return (
    <section className={styles.section}>
      <img
        src={videoSelected.image}
        alt="portada-video"
        className={styles.imagevideo}
      />
      <div className={styles.textContainer}>
        <h3 className={styles.category}>{videoSelected.category}</h3>
        <h2 className={styles.title}>{videoSelected.title}</h2>
        <p className={styles.description}>{videoSelected.description}</p>
        <div className={styles.buttonContainer}>
          <a href={videoSelected.urlVideo} target="_blank" rel="noreferrer">
            <Button variant="outlined">Ver video</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSelected;
