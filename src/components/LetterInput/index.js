import { TextField } from "@material-ui/core";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

const POSITION_TO_STYLE = {
  correct: styles.correct,
  disabled: styles.disabled,
  incorrect: styles.incorrect,
  notFound: styles.notFound,
};

const LetterInput = forwardRef(
  (
    { disabled, handleFocusChange, id, index, onChange, position, ...props },
    ref
  ) => {
    return (
      <TextField
        className={POSITION_TO_STYLE[position]}
        classes={{ root: styles.letter }}
        disabled={disabled}
        id={id}
        inputProps={{ maxLength: 1 }}
        InputProps={{ disableUnderline: true }}
        inputRef={ref}
        ref={(element) => handleFocusChange(element, index)}
        {...props}
      />
    );
  }
);

export default LetterInput;
