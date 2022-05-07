import { Grid } from "@material-ui/core";
import Word from "./components/Word";
import styles from "./App.module.scss";

const App = () => {
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
      {/* {
        [...Array(6)].map((_, index) =>  */}
      <Word
      // key={index}
      />
      {/* )
      } */}
    </Grid>
  );
};

export default App;
