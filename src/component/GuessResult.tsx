import Block from "./Block";

interface GuessesProp {
  guesses: string[];
  answer: string;
}

const GuessResult = ({ guesses, answer }: GuessesProp) => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center">
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <Block key={num} word={guesses[num]} answer={answer} />
        ))}
      </div>
    </>
  );
};

export default GuessResult;
