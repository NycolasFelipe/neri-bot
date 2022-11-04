import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background: #F9F9F9;
  width: 60%;
`;

export const ButtonCol = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 30px;
  width: 90%;

  & > button {
    width: 300px;
    height: 200px;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;


export const ContainerRight = styled.div`
  background: #F9F9F9;
  background-image: url('../../img/backgroundMenu.jpg');
  background-size: 70%;
  background-position-x: 30%;
  background-position-y: 45%;
  background-repeat: no-repeat;
  flex: 1;
`;