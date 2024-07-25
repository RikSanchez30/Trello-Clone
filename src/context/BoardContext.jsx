import { createContext } from "react";

const defaultContextValue = {
  allboard: { boards: [], active: null },
  setAllBoard: () => {}
};

const BoardContext = createContext(defaultContextValue);

export default BoardContext;
