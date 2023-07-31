import axios from "axios";
import { useEffect, useState } from "react";

const VideoInteractionSection = () => {
  const [comments, setComments] = useState([]);

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
      userName: document.getElementById("input-username").value,
      email: document.getElementById("input-email").value,
      comment: document.getElementById("input-comment").value,
    };
    try {
      const response = await axios.post(
        "https://welearnwebapi.onrender.com/createComments",
        comment
      );
      const data = response.data;

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <input type="text" id="input-username" />
        <input type="email" name="" id="input-email" />
        <input type="text" name="" id="input-comment" />
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
