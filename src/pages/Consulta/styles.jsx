import styled from "styled-components";

const color_green = '#2ac954';
const color_blue = '#3182CE';
const color_bg = '#FAFAFA';
const color_border = '#ddd';

export const Main = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  background: ${color_bg};
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100vw;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 500;
  background: ${color_blue};
  & > p {
    color: #fff;
  }
  & > button {
    margin-right: 15px;
    height: 25px;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 40px;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.colorItem && color_green};
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
  border: 1px solid ${color_border};
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  width: 500px;
  box-sizing: border-box;
  padding: 10px 15px;
`;

export const CampoInformacoes = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  & > div > label {
    font-size: 0.8rem;
    margin-bottom: 3px;
  }
  & > div > input {
    height: 35px;
    padding-left: 10px;
    margin-bottom: 20px;
  }
  #dataNascimento {
    background: ${color_bg};
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
  & > div > label {
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

export const CampoSintomas = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  color: #ff0000;
  margin-top: 5px;
  font-size: 0.8rem;
`;