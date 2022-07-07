import { createContext, createSignal, useContext } from "solid-js";

const MyContext = createContext({ count: 0 });

export const MyContextProvider = (props) => {
  const [getCount, setCount] = createSignal(0);

  const store = [
    getCount,
    {
      add() {
        setCount((p) => p + 1);
      },
      reset() {
        setCount(0);
      },
    },
  ];
  return (
    <MyContext.Provider value={store}>{props.children}</MyContext.Provider>
  );
};

export const useAppContext = () => useContext(MyContext);
