import styled from 'styled-components';
import { motion } from 'framer-motion';
import { task } from '../atom';
import { toDoDatasAtom } from '../atom';
import { useRecoilState } from 'recoil';

interface CardProps {
  data: task;
  boardKey: string;
}

const Card = ({ data, boardKey }: CardProps) => {
  const [toDoDatas, setToDoDatas] = useRecoilState(toDoDatasAtom);
  const { title, description } = data;

  const doneHandler = () => {
    setToDoDatas((prev) => {
      const oldData = { ...prev };
      const oldArr = [...oldData['toDo']];
      let targetIndex;

      oldArr.map((v, i) => {
        if (v.title === title) return (targetIndex = i);
      });

      if (!targetIndex && targetIndex !== 0) return prev;

      const targetTask = oldArr.splice(targetIndex, 1)[0];
      const doneArr = [...prev['done'], targetTask];
      return {
        toDo: oldArr,
        done: doneArr,
      };
    });
  };

  return (
    <Wrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
      {boardKey === 'toDo' ? (
        <BtnContainer>
          <Btn onClick={doneHandler}>
            <svg
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </Btn>
          <Btn>
            <svg
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Btn>
        </BtnContainer>
      ) : (
        <BtnContainer>
          <Btn>
            <svg
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </Btn>
          <Btn>
            <svg
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Btn>
        </BtnContainer>
      )}
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled(motion.div)`
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  transition: ease-in-out 0.15s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const InfoContainer = styled.div`
  max-width: 400px;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  margin-right: 10px;
`;

const Btn = styled.div`
  padding: 5px;
  border-radius: 3px;
  transition: ease-in-out 0.15s;

  :hover {
    background: rgba(111, 111, 111, 0.6);
  }
`;

const BtnContainer = styled.div`
  display: flex;
  div {
    margin: 3px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  padding: 10px;
`;
