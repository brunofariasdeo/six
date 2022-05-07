import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LetterInput from "../LetterInput";
import styles from "./styles.module.scss";

const NUMBER_TO_POSITION = {
  1: "firstLetter",
  2: "secondLetter",
  3: "thirdLetter",
  4: "fourthLetter",
  5: "fifthLetter",
  6: "sixthLetter",
};

const Word = ({ isCurrentGuess, onGuessSubmit }) => {
  const { register, handleSubmit } = useForm();

  const [letters, setLetters] = useState({});
  const [isSubmitted, setIsSubmmited] = useState(false);

  const word = "abismo";

  const onSubmit = (data) => {
    const keys = Object.keys(data);

    keys.forEach((key, index) => {
      if (data[key] === word[index]) {
        data[key] = { letter: data[key], position: "correct" };
      } else if (data[key] !== word[index] && word.includes(data[key])) {
        data[key] = { letter: data[key], position: "incorrect" };
      } else {
        data[key] = { letter: data[key], position: "notFound" };
      }
    });

    setIsSubmmited(true);
    setLetters(data);
    onGuessSubmit();
  };

  return (
    <Grid
      alignItems="center"
      classes={{
        root: styles.container,
      }}
      container
      direction="row"
      justifyContent="center"
    >
      <form className={styles.wordForm} onSubmit={handleSubmit(onSubmit)}>
        {[...Array(6)].map((_, index) => (
          <LetterInput
            disabled={!isCurrentGuess || isSubmitted}
            id={NUMBER_TO_POSITION[index + 1]}
            key={index}
            position={
              isSubmitted
                ? letters[NUMBER_TO_POSITION[index + 1]]["position"]
                : isCurrentGuess
                ? ""
                : "disabled"
            }
            {...register(NUMBER_TO_POSITION[index + 1])}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default Word;
