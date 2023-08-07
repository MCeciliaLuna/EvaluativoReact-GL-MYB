import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styles from '../styles/VideoInteractionSection.module.css';
import toast, { Toaster } from "react-hot-toast";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const VideoInteractionSection = () => {
  const [comments, setComments] = useState([]);
  const commentUser = useRef(null)

  const userName = sessionStorage.getItem("userName");
  const userEmail = sessionStorage.getItem("userEmail");

  const getComments = async () => {
    try {
      const response = await axios.get(
        "https://welearnwebapi.onrender.com/getcomments"
      );
      const data = response.data;
      data.reverse();
      setComments(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const commentData = async (event) => {
    event.preventDefault();
    if (commentUser.current.value) {
      const comment = {
        userName: userName,
        email: userEmail,
        comment: commentUser.current.value,
      };
      try {
        const response = await axios.post(
          "https://welearnwebapi.onrender.com/createComments",
          comment
        );
        const data = response.data;
        commentUser.current.value="";
        getComments();
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Ingresá tu comentario");
    }
  };

  return (
    <section className={styles.section}>
      <Toaster />
      <form className={styles.formcomment}>
        <p className={styles.questionuser}>Qué pensás acerca de esto, <b>{userName}</b>?</p>
        <textarea className={styles.inputcomment} id="input-comment" ref={commentUser} maxLength="700" />
        <button className={styles.button} onClick={commentData}>
          Comentar
        </button>
      </form>
      <section className={styles.commentssection}>
      {comments?.map((comment, index) => (
        <Card className={styles.card} key={index}>
      <CardContent className={styles.commentdata}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {comment.email}
        </Typography>
        <Typography variant="h5" component="div">
        {comment.userName} dice:
        </Typography>
        <Typography className={styles.commenttext} variant="body2">
        {comment.comment}
                  </Typography>
      </CardContent>
      <section className={styles.container}>
  <div className={styles.wave}></div>
</section>
      <CardActions className={styles.reactions}>
        <Button>🤩</Button>
        <Button>😡</Button>
      </CardActions>
    </Card>
    ))}
      </section>
    </section>
  );
};

export default VideoInteractionSection;
