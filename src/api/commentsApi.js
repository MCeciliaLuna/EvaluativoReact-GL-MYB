import axios from "axios";

export const getComments = async (setComments, setLoadingComments) => {
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

export const createComment = async (
  userName,
  userEmail,
  commentUser,
  getComments
) => {
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
};
