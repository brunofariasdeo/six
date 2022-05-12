import { TextField } from "@material-ui/core";
import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const POSITION_TO_STYLE = {
  correct: styles.correct,
  disabled: styles.disabled,
  incorrect: styles.incorrect,
  notFound: styles.notFound,
};

const LetterInput = forwardRef(
  (
    {
      disabled,
      focused,
      handleFocusChange,
      id,
      index,
      onChange,
      position,
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        className={clsx(
          POSITION_TO_STYLE[position],
          focused && !disabled && styles.focused
        )}
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
