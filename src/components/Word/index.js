import { Grid } from "@material-ui/core";
import LetterInput from "../LetterInput";
import styles from './styles.module.scss';

const Word = () => {
  // const word = "abismo";
  // const guess = "ambito";

  return (
    <Grid
      alignItems="center"
      classes={{
        root: styles.container
      }}
      container
      direction="row"
      justifyContent="center"
    >
      {
        [...Array(6)].map((_, index) => 
          <LetterInput 
            key={index}
          />
        )
      }      
    </Grid>
  )
};

export default Word;
