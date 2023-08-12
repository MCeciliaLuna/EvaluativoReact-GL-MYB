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
import { getComments, createComment } from "../api/commentsApi";

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

  const handleComments = () => {
    getComments(setComments, setLoadingComments);
  };


  const countCharacters = () => {
    const commentCharacters = commentUser.current.value;
    if (commentCharacters.length <= maxLength) {
      setCharacters(commentCharacters);
    }
  };

  const handleCreateComment = (event) => {
    event.preventDefault();
    if (commentUser.current.value.length > minLength) {
      createComment(userName, userEmail, commentUser, handleComments);
      toast("¡Tu comentario fue publicado! ✅", {
        duration: 6000,
      });
    } else {
      toast.error("Ingresá un comentario más extenso");
    }
  }

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
    handleComments();
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
          <button className={styles.button} onClick={handleCreateComment}>
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
