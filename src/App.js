import React from 'react'
import { ThemeProvider } from './components/context/theme-dark-light';
import AppRoutes from './components/pages/routes/AppRoutes';
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles/>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
`


export default App;
