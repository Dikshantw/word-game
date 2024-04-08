import Block from "./Block";

interface GuessesProp {
  guesses: string[];
}

const GuessResult = ({ guesses }: GuessesProp) => {
  return (
    <>
      <div className="flex-1 flex flex-col justify-center">
        {guesses.map((guess) => (
          <Block key={guess} word={guess} />
        ))}
      </div>
    </>
  );
};

export default GuessResult;
