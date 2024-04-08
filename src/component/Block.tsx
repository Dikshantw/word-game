interface BlockProp {
  word: string;
}

const Block = ({ word }: BlockProp) => {
  return (
    <p className="flex gap-1 mb-1">
      {word.split("").map((letter) => (
        <span
          key={letter}
          className="relative w-20 grid place-content-center border-2 border-gray-700 text-2xl"
        >
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Block;
