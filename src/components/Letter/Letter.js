import classNames from "classnames";
import "./styles.scss";

const Letter = ({ letter, position }) => {
  return <div className={classNames("letter", position)}>{letter}</div>;
};

export default Letter;
