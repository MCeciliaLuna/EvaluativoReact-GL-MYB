import { useEffect } from "react";
import { commentsApi } from "../api/commentsApi";

const VideoInteractionSection = () => {
  const { fetchData, response } = commentsApi();

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(response)
  }, [response]);


  return (
    <>
    <section>
      <button>Opina</button>
      <button>Pregunta</button>
    </section>
    <section>
      <div>
      <p>hola</p>
      </div>
    </section>
    </>
  );
};

export default VideoInteractionSection;
