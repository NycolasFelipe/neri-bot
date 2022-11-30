import styled from "styled-components";

const color_green = '#2ac954';
const color_blue = '#3182CE';
const color_border = '#ddd';
const color_grey = '#747474';

export const Main = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  background: #43cea2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 400px) {
    height: 120vh;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  & > p {
    color: #fff;
    user-select: none;
    text-align: center;
    padding-top: 10px;
    font-size: 1rem;
  }
  & > button {
    margin-right: 15px;
    height: 30px;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  & > button:hover {
    color: #fff;
  }
  @media screen and (max-width: 580px) {
    font-size: 0.8rem;
    padding-top: 50px;
    width: 80vw;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;
  margin-top: 25px;
  color: #fff; 
  width: 100%;
`;

export const Campos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #ECE9E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #faf7f4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #faf7f4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid ${color_border};
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  max-width: 500px;
  width: 90%;
  box-sizing: border-box;
  padding: 15px 25px;
`;

export const CampoInformacoes = styled.div`
  display: flex;
  line-height: 1;
  & > div > label {
    color: ${color_grey};
    font-size: 0.8rem;
    margin-bottom: 3px;
  }
  & > div > input {
    height: 35px;
    padding-left: 10px;
    margin-bottom: 20px;
  }
  #dataNascimento {
    background: #ECE9E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFFFFF, #FDFCFA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFFFFF, #FDFCFA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 35px;
    padding-left: 10px;
    margin-bottom: 20px;
    border: 1px solid ${color_border};
    border-radius: 6px;
  }
  #dataNascimento:focus {
    border: 2px solid ${color_blue};
    margin-left: -1px;
    outline: none;
    transition: all 0.05s ease;
  }
  .sexoOpcoes {
    & > label {
      font-weight: 500;
    }
  }
  .nextButton {
    margin-top: 20px;
  }
  .nextButton:hover {
    background: ${color_green};
  }

  @media screen and (max-width: 400px) {
    & > div > label {
      font-size: 0.7rem;
    }
    & > div > input {
      font-size: 0.8rem;
    }
    #dataNascimento {
      font-size: 0.8rem;
    }
  }
`;

export const CampoNascimento = styled.div`
  display: flex;
  & > p {
    width: 200%;
    padding-top: 5px;
    padding-left: 10px;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${color_blue};
  }
`;

export const CampoGestante = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  overflow: hidden;
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  > * {
    &:last-child {
      flex: 1;
      margin-left: 10px;
    }
    &:last-child:hover {
      background: ${color_green};
    }
  }
  
  @media screen and (max-width: 400px) {
    > * {
      font-size: 0.8rem !important;
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 500;
`;