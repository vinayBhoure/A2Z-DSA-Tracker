import { createContext, useContext, useState } from "react";
import data from "../components/Data.json";
const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvide({ children }) {
  const [authUser, setAuthUser] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const [problems, setProblems] = useState(data);

  const removeRowHandler = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this row?");
    if (!confirm) return;
    else {
      setProblems(problems.filter((problem) => problem.id !== id));
    }
  };

  return (
    <UserContext.Provider
      value={{
        authUser,
        setAuthUser,
        showMenu,
        setShowMenu,
        problems,
        setProblems,
        removeRowHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
