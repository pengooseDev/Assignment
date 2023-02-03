import GlobalStyle from './utils/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';
import Nav from './partials/Nav';
import styled from 'styled-components';
import Board from './components/Board';

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const dummy = [1, 2];
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      <Wrapper>
        <BoardContainer>
          {dummy.map((v) => (
            <Board />
          ))}
        </BoardContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BoardContainer = styled.div`
  background: rgba(111, 111, 111, 0.5);
  min-width: 800px;
  max-width: 1200px;
  height: 80vh;
  min-height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  padding: 15px;
  border-radius: 5px;
`;
