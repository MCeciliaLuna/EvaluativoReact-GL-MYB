const UserWelcome = () => {
  const userName = sessionStorage.getItem("userName");
  return (
    <h1>
      Bienvenidx <b>{userName}</b>
    </h1>
  );
};

export default UserWelcome;
