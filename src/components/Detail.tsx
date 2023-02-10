import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { taskId } = useParams();

  return <>TaskID : {taskId}</>;
};

export default Detail;
