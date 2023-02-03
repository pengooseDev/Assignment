import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IconProps {
  children: React.ReactNode;
}

const Icon = ({ children }: IconProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Icon;

const Wrapper = styled(motion.div)``;
