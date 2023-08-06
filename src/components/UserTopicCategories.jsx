import { Link } from 'react-router-dom';
import styles from '../styles/UserTopicCategories.module.css'

const UserTopicCategories = ({ videoData }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Buscá por temática:</h2>
      <div className={styles.categories}>
      {videoData.map((video, index) => (
        <div key={index}>
          <Link className={styles.linkrrd} to={`/secondadminpage/${video.category}`}>
            <p className={styles.category}>{video.category}</p>
          </Link>
        </div>
      ))}
      </div>
    </section>
  );
};

export default UserTopicCategories;
