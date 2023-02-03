import GlobalStyle from './utils/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atom';
import { useRecoilValue } from 'recoil';
import Nav from './partials/Nav';
import styled from 'styled-components';
import Board from './components/Board';
import { toDoDatasAtom } from './atom';
import AddTaskToggle from './AddTaskToggle';

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const toDoDatas = useRecoilValue(toDoDatasAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      <Wrapper>
        <BoardContainer>
          {Object.entries(toDoDatas).map(([key, i]) => (
            <Board boardKey={key} key={key + String(i)} />
          ))}
        </BoardContainer>
        <AddTaskToggle />
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
