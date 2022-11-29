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
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100vw;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  & > p {
    color: #fff;
    user-select: none;
  }
  & > button {
    margin-right: 15px;
    height: 30px;
    position: absolute;
    left: 30px;
  }
  & > button:hover {
    color: #fff;
  }
  @media screen and (max-width: 540px) {
    font-size: 0.8rem;
    padding-left: 110px;
    width: 80vw;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 40px;
  font-weight: 500;
  font-size: 1.1rem;
  user-select: none;
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  color: #ffffff40;
  color: ${props => props.colorItem && "#fff"};
  transition: all 0.3s ease;
  & > :not(p) {
    padding-top: 4px;
    margin: 0 8px;
    font-size: 14px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8rem;
    & > :not(p) {
      padding-top: 0;
      font-size: 8px;
    }
  }
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
  width: 500px;
  box-sizing: border-box;
  padding: 15px 25px;
`;

export const CampoInformacoes = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
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
`;

export const CampoHistorico = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-wrap: wrap;
  & > div > label {
    color: ${color_grey};
    font-size: 0.8rem;
    margin-top: 20px;
    margin-bottom: 3px;
  }
  & > div > label:first-child {
    margin-top: 0;
  }
  & > * {
    select {
      height: 35px;
      padding-left: 10px;
      
    }
  } 
`;

export const CampoHistoricoHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  padding-bottom: 10px;
  font-weight: 600;
  color: ${color_grey};
`;

export const CampoHistoricoTitle = styled.p`
  flex: 1;
  pointer-events: none;
`;

export const CampoHistoricoText = styled.p`
  min-width: 100px;
  text-align: end;
  pointer-events: none;
`;

export const CampoHistoricoItem = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  line-height: 2;

`;

export const CampoSintomas = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 500;
`;