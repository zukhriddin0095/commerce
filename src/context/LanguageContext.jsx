import { createContext,  useState } from "react";
import PropTypes from "prop-types";
import { RU } from "../data/RU";
import { UZ } from "../data/UZ";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  
  const [langType, setLangType] = useState(
    localStorage.getItem("language") || "ru"
  );
  const languages = {
    ru: RU,
    uz: UZ,
  };

  const state = { langType, lang: languages[langType], setLangType };
  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};


LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContextProvider;
