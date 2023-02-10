import GlobalStyle from './utils/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';
import Nav from './partials/Nav';
import Router from './Router';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      <Router />
    </ThemeProvider>
  );
}

export default App;
