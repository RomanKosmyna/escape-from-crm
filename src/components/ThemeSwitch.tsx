// "use client"

// import { useState } from "react";

// const ThemeSwitch = () => {
//     const [isThemeInit, setIsThemeInit] = useState<string>("");
//     const storedTheme = localStorage.getItem("efc-theme-ui");

//     if (storedTheme === null) return;

//     const setTheme = (e) => {
//         console.log(e.target.value);
//         setIsThemeInit(e);
//         localStorage.setItem(storedTheme, isThemeInit);
//     };

//     return (
//         <select name="theme" onChange={(e) => setTheme(e.target.value)}>
//             <option value="system">System</option>
//             <option value="dark">Dark</option>
//             <option value="light">Light</option>
//         </select>
//     )
// };

// export default ThemeSwitch;
