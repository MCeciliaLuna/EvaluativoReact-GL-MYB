import axios from "axios";
import { useEffect, useState, useRef } from "react";

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
      getComments();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <p>What do you think {userName}?</p>
        <input type="text" name="" id="input-comment" ref={commentUser} />
        <button type="submit" onClick={commentData}>
          Comentar
        </button>
      </form>
      <section>
        <div>
          {comments?.map((comment, index) => (
            <div key={index}>
              <hr />
              <p>{comment.userName}</p>
              <p>{comment.email}</p>
              <p>{comment.comment}</p>
              <p>
                likes: <b>{comment.like}</b> | dislikes:{" "}
                <b>{comment.disLike}</b>
              </p>
              <button>Like</button>
              <button>Dislike</button>
            </div>
          )) ?? <p>loading...</p>}
        </div>
      </section>
    </>
  );
};

export default VideoInteractionSection;
