import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';
import Nav from './partials/Nav';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      <div>Home</div>
    </ThemeProvider>
  );
}

export default App;
