import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'components/AppProvider';
import Switch from "react-switch";
import { IoMdSunny as Sun } from 'react-icons/io';
import { IoMdMoon as Moon } from 'react-icons/io';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  }
`;

const ThemeSwitcher = () => {

    const {themeMode, toggleThemeMode} = useContext(AppContext);

    const handleThemeChange = (e) => {
        toggleThemeMode();
      };

    return (
        <Root>
            <h1>Toggle Theme</h1>
            <Switch 
                checked={themeMode === 'lightTheme' ? true : false}
                onChange={handleThemeChange}
                uncheckedIcon={
                    <Moon
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 35,
                            paddingLeft: 24,
                        }}
                        color={themeMode === "darkTheme" ? "blue" : "blue"}
                        className="dark"
                    />
                }
                checkedIcon={
                    <Sun
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 35,
                            paddingLeft: 10,
                        }}
                        color={themeMode === "lightTheme" ? "white" : "grey"}
                        className="light"
                  />}
                height={50}
                width={120}
                borderRadius={30}
            />
        </Root>
    )
}

export default ThemeSwitcher;