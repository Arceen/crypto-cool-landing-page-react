// Reusable Button
// Every param has default but should almost always change -> text + fontSize + padding

import { useContext } from "react";
import styles from "./outlineButton.module.css";
import { SnackbarContext } from "../../../context/snackbarContext";

const OutlineButton = ({
  backgroundColor = "var(--white)",
  color = "var(--purple)",
  padding = "18px 40px",
  text = "Outline",
  borderRadius = "60px", // Using "60px" instead of 60 and parsing using -> {`${}`px} will just increase code and reduce readability
  fontFamily = "DM Sans",
  border = "2px solid var(--purple)",
  fontSize = "14px",
  letterSpacing = "0.56px",
  fontWeight = "700",
  callback = null,
}) => {
  const { setSnackbarHandler } = useContext(SnackbarContext);
  return (
    <button
      onClick={() => {
        if (callback) callback();
        else setSnackbarHandler(true);
      }}
      className={styles.button_main}
      style={{
        backgroundColor,
        color,
        padding,
        borderRadius,
        fontFamily,
        fontSize,
        letterSpacing,
        fontWeight,
        border,
      }}
    >
      {text}
    </button>
  );
};
export default OutlineButton;
