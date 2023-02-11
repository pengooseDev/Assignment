import styled from 'styled-components';
import Board from './components/Board';
import AddTaskToggle from './AddTaskToggle';
import { useSelector } from 'react-redux';
import { RootState } from './redux/modules/index';
import { toDoState } from './redux/modules/toDoDatas';

const Todos = () => {
  const toDoDatas: toDoState = useSelector(
    (state: RootState) => state.toDoReducer
  );

  return (
    <Wrapper>
      <BoardContainer>
        {Object.entries(toDoDatas).map(([key, i]) => (
          <Board boardKey={key} key={key + String(i)} />
        ))}
      </BoardContainer>
      <AddTaskToggle />
    </Wrapper>
  );
};

export default Todos;

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
