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
  overflow-x: hidden;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    align-content: flex-start;
    padding-top: 60px;
  }
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

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    gap: 0;
    & > button {
      height: 100px;
    }
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

  @media screen and (max-width: 900px) {
    display: none;
  }
`;