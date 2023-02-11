import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoDatasAtom } from '../atom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules/index';
import { toDoState } from '../redux/modules/toDoDatas';

const Detail = () => {
  const toDos: toDoState = useSelector((state: RootState) => state.toDoReducer);
  const { taskId } = useParams();
  const task = Object.entries(toDos)
    .map(([_, board]) => board.filter((task) => task.id === Number(taskId)))
    .flat()[0];

  return (
    <Container>
      <Wrapper>
        <Title>
          <Text>title : {task.title}</Text>
          <Link to="/">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={30}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </Svg>
          </Link>
        </Title>
        <Content>
          <div>id : {task.id}</div>
          <div>description : {task.description}</div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div``;

const Svg = styled.svg`
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  width: 500px;
  height: 650px;
  border-radius: 5px;
  background: ${(props) => props.theme.text};
  color: ${({ theme }) => theme.background};
  box-shadow: 10px 5px 10px rgba(111, 111, 111, 0.5);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(111, 111, 111, 0.5);
  padding: 15px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 3px;
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  background: rgba(111, 111, 111, 0.5);
  border-radius: 3px;
  height: 100%;
  gap: 10px;
`;
