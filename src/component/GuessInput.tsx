import { FormEvent, useState } from "react";

interface Props {
  handleGuess: (guess: string) => void;
  gameStatus: string;
}

const GuessInput = ({ gameStatus, handleGuess }: Props) => {
  const [guess, setGuess] = useState<string>("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 h-24">
      <input
        required
        disabled={gameStatus !== "running"}
        type="text"
        id="guess"
        className="block w-[250px] border-2 border-gray-400 py-2 px-4"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
