import React, { createContext, useContext, useEffect, useState } from 'react';
import { PageContext } from './PageContext';
import { themeOptions } from '../theme'

export const ThemeContext = createContext() 

const ThemeContextProvider = ({children}) => {

  const [colorTheme, setColorTheme] = useState(themeOptions.notes)

  const { pageType } = useContext(PageContext);

  const changeColor = () => {
    setColorTheme(themeOptions[pageType])
  }



  useEffect(()=> {
    changeColor()
  }, [pageType])

  return ( 
    <ThemeContext.Provider value={{colorTheme}}>
      {children}
    </ThemeContext.Provider>
   );
}
 
export default ThemeContextProvider;