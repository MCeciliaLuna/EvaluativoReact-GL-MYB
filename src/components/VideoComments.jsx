import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/VideoComments.module.css";
import toast, { Toaster } from "react-hot-toast";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CopyToClipboard from "react-copy-to-clipboard";
import Swal from "sweetalert2";

const VideoComments = () => {
  const [comments, setComments] = useState([]);
  const [characters, setCharacters] = useState("");
  const [loadingComments, setLoadingComments] = useState(true);
  const [copied, setCopied] = useState(false);
  const commentUser = useRef(null);
  const userName = sessionStorage.getItem("userName");
  const userEmail = sessionStorage.getItem("userEmail");
  const minLength = 150;
  const maxLength = 600;

  const getComments = async () => {
    try {
      const response = await axios.get(
        "https://welearnwebapi.onrender.com/getcomments"
      );
      const data = response.data;
      data.reverse();
      setComments(data);
      setLoadingComments(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const countCharacters = () => {
    const commentCharacters = commentUser.current.value;
    if (commentCharacters.length <= maxLength) {
      setCharacters(commentCharacters);
    }
  };

  const commentData = async (event) => {
    event.preventDefault();
    if (commentUser.current.value.length > minLength) {
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
        commentUser.current.value = "";
        getComments();
      } catch (error) {
        console.error(error);
      }
      toast("¡Tu comentario fue publicado! ✅", {
        duration: 6000,
      });
    } else {
      toast.error("Ingresá un comentario más extenso");
    }
  };

  const copiedEmail = (event) => {
    () => event.preventDefault();
    Swal.fire({
      title: "Copiaste su mail al portatapeles",
      text: "¡Puedes contactar a este usuario personalmente para compartir más conocimientos! 🚀",
      confirmButtonColor: "var(--background)",
      confirmButtonText: "Entendido",
    });
    
    setCopied(true);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className={styles.section}>
      <Toaster />
      <form className={styles.formComment}>
        <p className={styles.questionUser}>
          ¿Qué pensás acerca de esto, <b>{userName}</b>?
        </p>
        <textarea
          required
          className={styles.inputComment}
          id="input-comment"
          ref={commentUser}
          minLength={minLength}
          maxLength={maxLength}
          onChange={() => countCharacters()}
        />
        <div className={styles.commentButtonContainer}>
          <p className={styles.countCharacters}>
            {maxLength - characters.length}/{maxLength}
          </p>
          <button className={styles.button} onClick={commentData}>
            Comentar
          </button>
        </div>
      </form>
      <hr />
      <section className={styles.commentSection}>
        {loadingComments ? (
          <span className={styles.loaderContainer}>
            <p className={styles.loader}>Cargando comentarios...</p>
          </span>
        ) : (
          comments?.map((comment) => (
            <Card className={styles.card} key={comment._id}>
              <CardContent className={styles.commentsData}>
                <Typography sx={{ fontSize: 20 }} variant="h5" component="div">
                  {comment.userName} dice:
                </Typography>
                <Typography className={styles.commentText} variant="body2">
                  {comment.comment}
                </Typography>
              </CardContent>
              <section className={styles.container}>
                <div className={styles.wave}></div>
              </section>
              <CardActions className={styles.emailContact}>
                <CopyToClipboard text={comment.email}>
                  <Button
                    sx={{ fontSize: 13, fontWeight: "bold" }}
                    onClick={() => copiedEmail()}
                  >
                    {comment.email} 💬
                  </Button>
                </CopyToClipboard>
              </CardActions>
            </Card>
          ))
        )}
      </section>
    </section>
  );
};

export default VideoComments;
