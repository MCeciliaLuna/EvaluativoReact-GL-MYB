import styles from "../styles/VideoSelected.module.css";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../context";

const VideoSelected = ({ videoSelected }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <section
      className={styles.section}
      style={{ backgroundColor: darkMode ? "#b8d0eb" : null }}
    >
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
