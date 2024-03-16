import { createContext, useState } from "react";
import Menu from "./Menu";
import Game from "./Game";
import styles from "../Styles.module.css";
import sound from "../audio-tracks/Sakura-Girl-Peach-chosic.com_.mp3";

export const GameContext = createContext();

function MainPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(undefined);

  const playGame = () => {
    setIsPlaying(true);
    // setIsGameOver(false);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isPlaying) {
      setIsPlaying(false);
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  const [audio, setAudio] = useState(new Audio(sound));
  
  return (
    <GameContext.Provider value={[isGameOver, setIsGameOver]}>
      <div className={styles["main-page"]}>
        <Game isPlaying={isPlaying} />
        {!isPlaying && <Menu audio={audio} playGame={playGame} />}
      </div>
    </GameContext.Provider>
  );
}

export default MainPage;