import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// inital state
const initialState = {
  contents: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const editContent = (content) => {
    dispatch({
      type: "EDIT_CONTENT",
      payload: content,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        contents: state.contents,
        editContent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
