import styled from 'styled-components';
import { motion } from 'framer-motion';
import { task } from '../atom';

interface CardProps {
  data: task;
}

const Card = ({ data }: CardProps) => {
  const { title, description } = data;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
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

  :hover {
    scale: 1.025;
    opacity: 1;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-weight: 600;
`;

const Description = styled.div``;
