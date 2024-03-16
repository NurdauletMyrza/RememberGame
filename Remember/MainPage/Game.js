import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { GameContext } from ".";

function Game(props) {
  const [gameData, setGameData] = useState(
    {
      columns: 2,
      rows: 2,
      score: 0,
      seconds: 2 * 2 * 5
    }
  );

  const [user, setUser] = useContext(UserContext);
  const [isGameOver, setIsGameOver] = useContext(GameContext);
  // console.log(user);

  const gameOver = () => {
    console.log("Game over");
    let totalScore = gameData.score + disabledCards.length / 2;
    if (user.score < totalScore) {
      localStorage.setItem(user.email, JSON.stringify({...user, score: totalScore}));
      setUser({...user, score: totalScore});
    }
    setGameData(
      {
        columns: 2,
        rows: 2,
        score: 0,
        seconds: 2 * 2 * 5
      }
    );
  }

  // useEffect(() => {
  //   if (isGameOver) {
  //     let totalScore = gameData.score + disabledCards.length / 2;
  //     if (user.score < totalScore) {
  //       localStorage.setItem(user.email, JSON.stringify({...user, score: totalScore}));
  //       setUser({...user, score: totalScore});
  //     }
  //     setGameData(
  //       {
  //         columns: 2,
  //         rows: 2,
  //         score: 0,
  //         seconds: 2 * 2 * 5
  //       }
  //     );
  //   }
  // }, [isGameOver]);

  let firstClickedCardData = undefined;
  let secondClickedCardData = undefined;
  let disabledCards = [];

  const nextLevel = () => {
    for (let disabledCard of disabledCards) {
      disabledCard.event.target.disabled = false;
    }
    let columns = gameData.columns;
    let rows = gameData.rows;
    if (columns >= rows && columns < rows + 2 && rows % 2 !== 1) {
      columns++;
    } else if (columns > rows) {
      rows++;
    }
    let totalScore = gameData.score + disabledCards.length / 2;
    if (user.score < totalScore) {
      localStorage.setItem(user.email, JSON.stringify({...user, score: totalScore}));
      setUser({...user, score: totalScore});
    }
    setGameData(
      {
        columns: columns,
        rows: rows,
        score: totalScore,
        seconds: rows * columns * 5
      }
    );
  };

  const compareCards = () => {
    firstClickedCardData.event.target.checked = false;
    secondClickedCardData.event.target.checked = false;
    if (cards[firstClickedCardData.index].value === cards[secondClickedCardData.index].value) {
      firstClickedCardData.event.target.disabled = true;
      secondClickedCardData.event.target.disabled = true;
      disabledCards.push(firstClickedCardData);
      disabledCards.push(secondClickedCardData);
      if (disabledCards.length >= cards.length) {
        console.log("end");
        nextLevel();
      }
    }
    firstClickedCardData = undefined;
    secondClickedCardData = undefined;
  };

  const onClickCard = (id, event) => {
    if (firstClickedCardData === undefined) {
      firstClickedCardData = {
        index: id,
        event: event
      };
    } else if (firstClickedCardData.index === id) {
      firstClickedCardData = undefined;
    } else {
      secondClickedCardData = {
        index: id,
        event: event
      };
      compareCards()
    }
  };

  const getRandomItem = (arr) => arr.splice((Math.random() * arr.length) | 0, 1)[0];

  const createCard = (id, value) => {
    const card = {
      id: id,
      value: value,
      clickHandler: (event) => onClickCard(id, event)
    };

    return card;
  };

  const createShuffledCards = (rows, columns) => {
    const numbers = [];
    const cards = [];

    for (let i = 0; i < rows * columns; i++) {
      numbers.push(Math.floor(i / 2));
    }

    for (let i = 0; 0 < numbers.length; i++) {
      const card = createCard(i, getRandomItem(numbers));
      cards.push(card);
    }
    
    return cards;
  };

  const cards = createShuffledCards(gameData.rows, gameData.columns);

  return (
    <>
      <div className="cards-container">
        <div
          className="cards"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gameData.columns}, calc(50vw / ${gameData.columns}))`,
            gridTemplateRows: `repeat(${gameData.rows}, calc(50vw / ${gameData.columns}))`,
            gap: `calc(5vw / ${gameData.columns})`
          }}
        >
          {
            cards.map((card) => (
              <Card key={"card-" + card.id} card={card}/>
            ))
          }
        </div>
      </div>
      <Timer isRunning={props.isPlaying} seconds={gameData.seconds} gameOver={gameOver} />
    </>
  );
}

function Card(props) {
  const card = props.card;
  return (
    <label
      className="card"
      style={{
        backgroundColor: "#DDDDDD",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <span style={{fontSize: "128px"}}>{card.value}</span>
      <input
        type="checkbox"
        value={card.value}
        onChange={(event) => card.clickHandler(event)}
        disabled={false}
      />
    </label>
  );
}

function Timer(props) {
  const [seconds, setSeconds] = useState(props.seconds);
  // const [isGameOver, setIsGameOver] = useContext(GameContext);

  const resetTimer = () => {
    setSeconds(props.seconds);
  }

  useEffect(() => {
    let intervalId;

    if (props.isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            // setIsGameOver(true);
            props.gameOver();
            clearInterval(intervalId);
            resetTimer();
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    
    return () => {
      clearInterval(intervalId);
    };
  }, [props.isRunning]);


  useEffect(() => {
    resetTimer();
  }, [props.seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <p style={{
      position: "absolute",
      top: "0",
      right: "0",
      fontSize: "64px"
    }}>{minutes}:{remainingSeconds}</p>
  );
}

export default Game;

