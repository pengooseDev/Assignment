import styled from 'styled-components';
import Card from './Card';
import { toDoDatasAtom, addToggleAtom } from '../atom';
import { useRecoilValue } from 'recoil';
import AddTask from '../AddTask';

interface boardProps {
  boardKey: string;
}

const Board = ({ boardKey }: boardProps) => {
  const toggle = useRecoilValue(addToggleAtom);
  const toDoDatas = useRecoilValue(toDoDatasAtom);

  return (
    <Wrapper>
      <Title>{boardKey}</Title>
      {toDoDatas[boardKey].map((v) => (
        <Card data={v} />
      ))}
      {toggle && <AddTask />}
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
