import styled from 'styled-components';
import Card from './Card';
import { toDoDatasAtom } from '../atom';
import { useRecoilValue } from 'recoil';

interface boardProps {
  boardKey: string;
}

const Board = ({ boardKey }: boardProps) => {
  const toDoDatas = useRecoilValue(toDoDatasAtom);

  return (
    <Wrapper>
      {toDoDatas[boardKey].map((v) => (
        <Card data={v} />
      ))}
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
