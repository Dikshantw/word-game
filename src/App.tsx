import { useState } from "react";
import GuessInput from "./component/GuessInput";
import GuessResult from "./component/GuessResult";

function App() {
  const [guesses, setGuesses] = useState([]);
  function handleGuess(guess) {
    const copyGuesses = [...guesses];
    copyGuesses.push(guess);
    setGuesses(copyGuesses);
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-1 flex flex-col gap-2 px-8 py-2 mx-auto ">
        <GuessResult guesses={guesses} />
        <GuessInput handleGuess={handleGuess} />
      </div>
    </div>
  );
}

export default App;
