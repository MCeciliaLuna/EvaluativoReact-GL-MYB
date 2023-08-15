import { Link } from "react-router-dom";
import styles from "../styles/HomeCategories.module.css";
import { Zoom } from "react-awesome-reveal";

const HomeCategories = ({ videoData }) => {
  return (
    <section className={styles.section}>
       <Zoom cascade damping={0.5} triggerOnce>
      <h2 className={styles.title}>Buscá por temática:</h2>
      </Zoom>
      <div className={styles.categories}>
        {videoData.map((video, index) => (
          <div key={index}>
            <Link
              className={styles.linkRrd}
              to={`/selectedcategory/${video.category}`}
            >
              <Zoom cascade damping={0.5} triggerOnce>
              <p className={styles.category}>{video.category}</p>
              </Zoom>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
