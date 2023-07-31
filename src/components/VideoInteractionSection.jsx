import { useEffect, useState } from "react";
import { commentsApi } from "../api/commentsApi";

const VideoInteractionSection = () => {
  const { fetchData, response } = commentsApi();
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
   const aleatoryResponse = response?.toSorted(
    () => 0.5 - Math.random()
  ).slice(0,10)
  setComments(aleatoryResponse)
  }, [response]);


  return (
    <>
    <section>
        <label>
          Comentar
      <input type="text" name="" id="" />
      </label>
      <button>Comentar</button>
    </section>
    <section>
      <div>
      {
      comments?.map((comment, index) =>
      <div key={index}>
        <hr />
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
      </div>
    )?? <p>loading...</p>
    }
      </div>
    </section>
    </>
  );
};

export default VideoInteractionSection;
