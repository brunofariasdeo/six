import Letter from "./components/Letter/Letter";
import "./app.scss";

function App() {
  const word = "abismo";
  const guess = "ambito";

  return (
    <div className="word-container">
      {guess.split("").map((letter, index) => {
        if (letter === word[index]) {
          return <Letter letter={letter} position="correct" />;
        } else if (letter !== word[index] && word.indexOf(letter) !== -1) {
          return <Letter letter={letter} position="almost" />;
        } else {
          return <Letter letter={letter} position="incorrect" />;
        }
      })}
    </div>
  );
}

export default App;
