import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { params } = useParams();

  console.log(params);
  return <>detail</>;
};

export default Detail;
