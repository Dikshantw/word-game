import React from "react";

const GuessResult = () => {
  return (
    <>
      <div className="flex-1 flex flex-col justify-center">
        {[0, 1, 2, 3, 4, 5].map((word) => (
          <p key={word} className="flex gap-1 mb-1">
            {[0, 1, 2, 3, 4].map((letter) => (
              <span
                key={letter}
                className="relative w-20 grid place-content-center border-2 border-gray-700 text-2xl"
              >
                {letter}
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
};

export default GuessResult;
