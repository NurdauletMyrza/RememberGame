import { useContext, useEffect } from "react";
import styles from "../Styles.module.css";
import { UserContext } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
import { GameContext } from ".";

function Menu(props) {
  const [user, setUser] = useContext(UserContext);
  const [isGameOver, setIsGameOver] = useContext(GameContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   setUser({...user});
  // }, []);

  
  const togglePlay = () => {
    if (props.audio.paused) {
      props.audio.play();
    } else {
      props.audio.pause();
    }
  };

  let buttonText = "Play Game";
  // if (isGameOver === undefined) {
  //   buttonText = "Play Game";
  // } else if (isGameOver === true) {
  //   buttonText = "Restart";
  // } else if (isGameOver === false) {
  //   buttonText = "Continue";
  // }
  
  return (
    <div className={styles.menu}>
      <button onClick={() => props.playGame()}>{buttonText}</button>
      {(user !== undefined && user.email === undefined && user.score > 0) && <button onClick={() => navigate("/sign-up")}>Sign Up for save result</button>}
      <button onClick={togglePlay}>Sound</button>
    </div>
  );
}


export default Menu;