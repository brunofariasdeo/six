import { TextField } from "@material-ui/core";
import styles from './styles.module.scss';

const LetterInput = () => {
  return (
    <TextField
      classes={{ root: styles.letter }}
      inputProps={{ maxLength: 1 }}
      InputProps={{ disableUnderline: true }}
    />
  );
}

export default LetterInput;