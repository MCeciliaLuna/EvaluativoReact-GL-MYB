import { Link } from "react-router-dom";
import styles from "../styles/HomeCategories.module.css";

const HomeCategories = ({ videoData }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Buscá por temática:</h2>
      <div className={styles.categories}>
        {videoData.map((video, index) => (
          <div key={index}>
            <Link
              className={styles.linkRrd}
              to={`/selectedcategory/${video.category}`}
            >
              <p className={styles.category}>{video.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
