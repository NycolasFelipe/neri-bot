import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #43cea2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  #signoutWarning {
    margin-top: 100px;
    background: red !important;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
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
  background-image: url('../../img/backgroundMenu.png');
  background-size: 70%;
  background-position-x: 30%;
  background-position-y: 40%;
  background-repeat: no-repeat;
  flex: 1;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;