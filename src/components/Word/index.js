import { Grid } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [letters, setLetters] = useState({});
  const [isSubmitted, setIsSubmmited] = useState(false);
  const lettersRef = useRef([]);

  const word = "abismo";

  const checkPosition = (index) => {
    if (isSubmitted) {
      return letters[NUMBER_TO_POSITION[index + 1]]["position"];
    } else {
      if (!isCurrentGuess) {
        return "disabled";
      }
    }
  };

  const handleFocusChange = (element, index) => {
    lettersRef.current[index] = element;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

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

  useEffect(() => {
    setTimeout(() => {
      lettersRef.current[currentIndex].querySelector("input").focus();
    }, 10);
  }, [currentIndex]);

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
            handleFocusChange={handleFocusChange}
            id={NUMBER_TO_POSITION[index + 1]}
            index={index}
            key={NUMBER_TO_POSITION[index + 1]}
            onKeyPress={(event) => handleKeyPress(event, index)}
            position={checkPosition(index)}
            {...register(NUMBER_TO_POSITION[index + 1])}
          />
        ))}
      </form>
    </Grid>
  );
};

export default Word;
