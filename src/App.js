//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import BottomRow from "./BottomRow";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  //Home TouchDown and Field Goal
  const [home, updateScoreH] = useState(0)

  const tdHome = e => {
    updateScoreH(home + 7)
  }

  const fgHome = e => {
    updateScoreH(home + 3)
  }


  //Away TouchDown and Field Goal
  const [away, updateScoreA] = useState(0)

  const tdAway = e => {
    updateScoreA(away + 7)
  }

  const fgAway = e => {
    updateScoreA(away + 3)
  }

  
  //Create Timer
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    const clock = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer-1)
      } else {
        clearTimeout(clock)
      }
    }, 1000)
  }, [timer])

 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick= {tdHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick= {fgHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick= {tdAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick= {fgAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
