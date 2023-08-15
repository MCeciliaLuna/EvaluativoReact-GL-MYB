import { Link } from "react-router-dom";
import styles from "../styles/HomeVideos.module.css";
import { Zoom, Fade } from "react-awesome-reveal";

const HomeVideos = ({ videoData }) => {
  const randomVideos = videoData.toSorted(() => 0.5 - Math.random());
  const twoRandomVideos = randomVideos.slice(0, 2);

  return (
    <section className={styles.sectionVideos} >
            <Fade cascade damping={0.5} triggerOnce>
            <h3 className={styles.title}>
        ¿Sobre qué se está hablando en WeLearn💡?
      </h3>
      </Fade>
            {twoRandomVideos.map((video) => (
        <div key={video.category}>
          <h5 className={styles.categoryVideo}>{video.category}</h5>
          <Zoom cascade damping={0.5} triggerOnce>
          <Link to={`/selectedcategory/${video.category}`}>
          <img
              src={video.image}
              alt="image-video"
              className={styles.imageVideo}
            />
            </Link>
            </Zoom>
        </div>
      ))}
    </section>
  );
};

export default HomeVideos;
