import React, {useState} from 'react'
import "./Darkmode.css"
import { lightTheme } from '../../Theme';
import { darkTheme } from '../../Theme';

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState();
    const handleToggle = () => {
if (isDarkMode){
setIsDarkMode(darkTheme)
}
else{
  setIsDarkMode(lightTheme)
}
        // setIsDarkMode(!isDarkMode);
      };
  return (
    <div className={`dark-mode-toggle ${isDarkMode ? {darkTheme} : {lightTheme}}`}>
    <button onClick={handleToggle}>Toggle Dark Mode</button>
  </div>
  )
}
