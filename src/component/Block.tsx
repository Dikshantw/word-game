import { checkGuess } from "../gameAlgo/checkGuess";

interface BlockProp {
  word: string;
  answer: string;
}

const Block = ({ word, answer }: BlockProp) => {
  const result = checkGuess(word, answer);
  const blockStyle = `relative w-1/5 flex items-center justify-center border-2  border-gray-300 text-2xl`;
  return (
    <p className="flex gap-1 mb-1 w-[250px] h-[35.2px]">
      {[0, 1, 2, 3, 4].map((num) => (
        <span
          key={num}
          className={`
                      ${
                        result !== null && result[num].status === "correct"
                          ? `${blockStyle} bg-[#538d4e] border-[#538d4e]`
                          : `${blockStyle} `
                      }
                      ${
                        result !== null && result[num].status === "incorrect"
                          ? `${blockStyle} bg-[#3a3a3c] border-[#3a3a3c]`
                          : `${blockStyle}`
                      }
                      ${
                        result !== null && result[num].status === "misplaced"
                          ? `${blockStyle} bg-[#b59f3b] border-[#b59f3b]`
                          : `${blockStyle}`
                      }
                    `}
        >
          {word ? word[num] : undefined}
        </span>
      ))}
    </p>
  );
};

export default Block;
