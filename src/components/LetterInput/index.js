import { TextField } from "@material-ui/core";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

const LetterInput = forwardRef(({ id, ...props }, ref) => {
  return (
    <TextField
      classes={{ root: styles.letter }}
      id={id}
      inputProps={{ maxLength: 1 }}
      InputProps={{ disableUnderline: true }}
      ref={ref}
      {...props}
    />
  );
});

export default LetterInput;
