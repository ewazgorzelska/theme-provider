import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [themeMode, setThemeMode] = useState('lightTheme');

    const toggleThemeMode = () => {
        setThemeMode(prevState => {
            if (prevState === 'lightTheme') {
                return 'darkTheme'
            } else {
                return 'lightTheme';
            }
        });
    };

    const value = { themeMode,toggleThemeMode };
    const customTheme = theme[themeMode];

    return <AppContext.Provider value={value}>
            <ThemeProvider theme={customTheme}>
            <GlobalStyle />
                {children}
            </ThemeProvider>
        </AppContext.Provider>
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AppProvider;
