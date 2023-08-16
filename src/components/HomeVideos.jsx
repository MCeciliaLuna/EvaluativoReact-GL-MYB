import { Link } from "react-router-dom";
import styles from "../styles/HomeVideos.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../context";

const HomeVideos = ({ videoData }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const randomVideos = videoData.toSorted(() => 0.5 - Math.random());
  const twoRandomVideos = randomVideos.slice(0, 2);

  return (
    <section
      className={styles.sectionVideos}
      style={{ backgroundColor: darkMode ? "#034078" : null }}
    >
      <h3 className={styles.title}>
        ¿Sobre qué se está hablando en WeLearn💡?
      </h3>
      {twoRandomVideos.map((video) => (
        <div key={video.category}>
          <h5 className={styles.categoryVideo}>{video.category}</h5>
          <Link to={`/selectedcategory/${video.category}`}>
            <img
              src={video.image}
              alt="image-video"
              className={styles.imageVideo}
            />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default HomeVideos;
