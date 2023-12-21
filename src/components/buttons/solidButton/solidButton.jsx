// Reusable Button
// Every param has default but should almost always change -> text + fontSize + padding

import { useContext } from "react";
import styles from "./solidButton.module.css";
import { SnackbarContext } from "../../../context/snackbarContext";

const SolidButton = ({
  backgroundColor = "var(--purple)",
  color = "var(--white)",
  padding = "18px 40px",
  text = "Solid",
  borderRadius = "60px", // Using "60px" instead of 60 and parsing using -> {`${}`px} will just increase code and reduce readability
  fontFamily = "DM Sans",
  fontSize = "14px",
  letterSpacing = "0.56px",
  fontWeight = "700",
  animate = false,
  callback = null,
}) => {
  const { setSnackbarHandler } = useContext(SnackbarContext);
  return (
    <button
      onClick={() => {
        if (callback) callback();
        else setSnackbarHandler(true);
      }}
      className={`${styles.button_main} ${
        animate ? styles.animatedButton : ""
      }`}
      style={{
        backgroundColor,
        color,
        padding,
        borderRadius,
        fontFamily,
        fontSize,
        letterSpacing,
        fontWeight,
      }}
    >
      {text}
    </button>
  );
};
export default SolidButton;
