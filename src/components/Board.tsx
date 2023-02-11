import styled from 'styled-components';
import Card from './Card';
import { addToggleAtom } from '../atom';
import { useRecoilValue } from 'recoil';
import AddTask from '../AddTask';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules';
import { toDoState } from '../redux/modules/toDoDatas';

interface boardProps {
  boardKey: string;
}

const Board = ({ boardKey }: boardProps) => {
  const toDoDatas: toDoState = useSelector(
    (state: RootState) => state.toDoReducer
  );
  const toggle = useRecoilValue(addToggleAtom);

  return (
    <Wrapper>
      <Title>{boardKey}</Title>
      {toDoDatas[boardKey].map((v, i) => (
        <Card data={v} boardKey={boardKey} key={v.id} />
      ))}
      <AnimatePresence>
        {toggle && boardKey === 'toDo' && <AddTask />}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: ease-in-out 0.15s;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border-radius: 5px;
  padding: 15px;
  height: 100%;
  overflow: auto;
`;

const Title = styled.div`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  transition: ease-in-out 0.15s;
  opacity: 0.9;
`;
