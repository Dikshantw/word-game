interface BlockProp {
  word: string;
}

const Block = ({ word }: BlockProp) => {
  return (
    <p className="flex gap-1 mb-1 w-[250px] h-[35.2px]">
      {[0, 1, 2, 3, 4].map((num) => (
        <span
          key={num}
          className="relative w-1/5  flex items-center justify-center border-2 border-gray-300 text-2xl"
        >
          {word ? word[num] : undefined}
        </span>
      ))}
    </p>
  );
};

export default Block;
