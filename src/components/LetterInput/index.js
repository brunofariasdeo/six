import { TextField } from "@material-ui/core";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

const POSITION_TO_STYLE = {
  correct: styles.correct,
  incorrect: styles.incorrect,
  notFound: styles.notFound,
};

const LetterInput = forwardRef(({ disabled, id, position, ...props }, ref) => {
  return (
    <TextField
      className={POSITION_TO_STYLE[position]}
      classes={{ root: styles.letter }}
      disabled={disabled}
      id={id}
      inputProps={{ maxLength: 1 }}
      InputProps={{ disableUnderline: true }}
      ref={ref}
      {...props}
    />
  );
});

export default LetterInput;
