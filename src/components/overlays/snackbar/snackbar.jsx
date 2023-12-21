import { useContext, useEffect } from "react";
import styles from "./snackbar.module.css";
import { SnackbarContext } from "../../../context/snackbarContext";
const Snackbar = () => {
  const { showSnackbar, setSnackbarHandler } = useContext(SnackbarContext);
  useEffect(() => {
    if (!showSnackbar) return;
    setTimeout(() => {
      setSnackbarHandler(false);
    }, 3000);
    return () => null;
  }, [showSnackbar, setSnackbarHandler]);
  return (
    <div
      style={{ opacity: showSnackbar ? 1 : 0 }}
      className={styles.snackbar_main}
    >
      Waiting for Implementation . Thank you for your Patience! 😊
    </div>
  );
};
export default Snackbar;
