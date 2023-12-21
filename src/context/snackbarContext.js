import React, { useState } from "react";

export const SnackbarContext = React.createContext({
  showSnackbar: false,
  setShowSnackbar: () => {},
});

export const SnackbarContextProvider = (props) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const setSnackbarHandler = (flag) => {
    setShowSnackbar(flag);
  };
  return (
    <SnackbarContext.Provider
      value={{
        showSnackbar,
        setSnackbarHandler,
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};
