import Block from "./Block";

interface GuessesProp {
  guesses: string[];
}

const GuessResult = ({ guesses }: GuessesProp) => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center">
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <Block key={num} word={guesses[num]} />
        ))}
      </div>
    </>
  );
};

export default GuessResult;
