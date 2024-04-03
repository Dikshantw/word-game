import { useState } from "react";

const GuessInput = () => {
  const [guess, setGuess] = useState<string>("");
  return (
    <form>
      <input
        type="text"
        id="guess"
        className="block w-[250px] border-2 border-gray-400"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
