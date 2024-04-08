import Block from "./Block";

const GuessResult = ({ guesses }) => {
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
