import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div>Home</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
