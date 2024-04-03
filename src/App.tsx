import GuessInput from "./component/GuessInput";
import GuessResult from "./component/GuessResult";

function App() {
  return (
    <div className="flex flex-col min-h-[100%] gap-2 p-8 w-[250px] ">
      <GuessResult />
      <GuessInput />
    </div>
  );
}

export default App;
