import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  background: #FAFAFA;
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
  background: #4E8FC5;

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
  color: ${props => props.colorItem && '#2AC954'};

  & > :not(p) {
    padding-top: 4px;
    margin: 0 8px;
    font-size: 14px;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
    & > :not(p) {
    font-size: 14px;
    padding-bottom: 3px;
  }
  }
`;

export const Campos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid #ddd;
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
  #birthDate {
    background: #FAFAFA;
    height: 35px;
    padding-left: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 6px;
  }
  #birthDate:focus {
    border: 2px solid #3182CE;
    margin-left: -1px;
    outline: none;
    transition: all 0.05s ease;
  }
  .nextButton {
    margin-top: 20px;
  }
  .nextButton:hover {
    background: #2ac954;
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
    color: #3182CE;
  }
`;

export const CampoHistorico = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  background: purple;
`;

export const CampoSintomas = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  background: green;
`;

