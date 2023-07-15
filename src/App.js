import "./styles.css";
import React, { useState, createContext, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prevState) => !prevState);
  };
  return (
    <Context.Provider value={{ dark, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export default function App() {
  return (
    <Provider>
      <Navbar />
      <Button />
    </Provider>
  );
}

function Navbar() {
  const { dark } = useContext(Context);
  return <h1 className={dark ? "dark" : "light"}>Hello world</h1>;
}

function Button() {
  const { toggleTheme } = useContext(Context);
  return (
    <div>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}
