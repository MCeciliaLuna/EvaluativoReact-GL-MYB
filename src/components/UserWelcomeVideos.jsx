import { Link } from 'react-router-dom';
import styles from '../styles/UserWelcomeVideos.module.css'

const UserWelcomeVideos = ({ videoData }) => {
  const randomVideos = videoData.toSorted(() => 0.5 - Math.random());
  const twoVideos = randomVideos.slice(0, 2);

  return (
    <section className={styles.sectionvideos}>
      <h3 className={styles.title}>¿Sobre qué se está hablando en WeLearn💡?</h3>
      {twoVideos.map((video, index) => (
        <div key={index} className={styles.video}>
          <h5 className={styles.categoryvideo}>{video.category}</h5>
          <Link to={`/secondadminpage/${video.category}`}>
          <img src={video.image} alt="image-video" className={styles.imagevideo} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default UserWelcomeVideos;
