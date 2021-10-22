import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import {backgroundColor, bordersColor, textColor} from '../common/themes'

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
    
      const Wrapper = styled.div`
        background-color: ${backgroundColor};
        color: ${textColor};
        border-color: ${bordersColor};
      `;
    
    const [themeState, setThemeState] = useState({
        mode: 'dark'
    });
    
  
  const setLight = () => {
      themeState.mode === 'dark' && setThemeState({ mode: 'light' });
  };

  const setDark = () => {
    themeState.mode === 'light' && setThemeState({ mode: 'dark' });
  };

  return (
    <ThemeToggleContext.Provider value={{ setLight, setDark }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;