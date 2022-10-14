import { createContext } from "react";

export const BookmarkContext = createContext();

export const BookmarkContextProvider = (props) => {
  return (
    <>
      <BookmarkContext.Provider value={{}}>
        {props.children}
      </BookmarkContext.Provider>
    </>
  );
};
