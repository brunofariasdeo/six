import { Button, Grid } from "@material-ui/core";
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

const Word = () => {
  const { register, handleSubmit } = useForm();
  const word = "abismo";
  const onSubmit = (data) => {
    const keys = Object.keys(data);

    keys.forEach((key, index) => {
      if (data[key] === word[index]) {
        data[key] = { letter: data[key], position: "correct" };
      } else if (data[key] !== word[index] && word.includes(data[key])) {
        data[key] = { letter: data[key], position: "incorrect" };
      } else {
        data[key] = { letter: data[key], position: "not-found" };
      }
    });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {[...Array(6)].map((_, index) => (
          <LetterInput
            id={NUMBER_TO_POSITION[index + 1]}
            key={index}
            {...register(NUMBER_TO_POSITION[index + 1])}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Sign in
        </Button>
      </form>
    </Grid>
  );
};

export default Word;
