import { Grid } from "@material-ui/core";
import { useState } from "react";
import Word from "./components/Word";
import styles from "./App.module.scss";

const App = () => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  const onGuessSubmit = () => {
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  return (
    <Grid
      alignItems="center"
      classes={{
        root: styles.container,
      }}
      container
      direction="column"
      justifyContent="center"
    >
      {[...Array(6)].map((_, index) => (
        <Word
          isCurrentGuess={currentGuessIndex === index}
          onGuessSubmit={onGuessSubmit}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default App;
