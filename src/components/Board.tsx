import styled from 'styled-components';
import Card from './Card';

const Board = () => {
  return <Wrapper>myBoard</Wrapper>;
};

export default Board;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border-radius: 5px;
  padding: 15px;
  height: 100%;
`;
