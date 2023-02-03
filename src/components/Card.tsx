import styled from 'styled-components';
import { motion } from 'framer-motion';
import { task } from '../atom';

interface CardProps {
  data: task;
  boardKey: string;
}

const Card = ({ data, boardKey }: CardProps) => {
  const { title, description } = data;

  return (
    <Wrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
      {boardKey === 'toDo' ? (
        <BtnContainer>
          <button>
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
          </button>
          <button>
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
          </button>
        </BtnContainer>
      ) : (
        <BtnContainer>
          <button>rollback</button>
          <button>delete</button>
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
    scale: 1.025;
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

const BtnContainer = styled.div`
  background: tomato;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  padding: 10px;
`;
