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
  console.log(langType);
  const state = { langType, lang: languages[langType], setLangType };
  console.log(languages.ru);
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
