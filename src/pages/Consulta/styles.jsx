import styled from "styled-components";

const color_green = '#2ac954';
const color_border = '#ddd';
const color_grey = '#747474';
const color_blue = '#3182CE';

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
  overflow-x: hidden;
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
  line-height: 3;
  text-align: center;
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

export const CampoInformacoes = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-wrap: wrap;
  margin-top: -2px;
`;

export const CampoInformacoesItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  line-height: 1.8;
`;

export const CampoInformacoesTitle = styled.p`
  color: ${color_grey};
  font-size: 0.9rem;
  font-weight: 500;

  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const CampoInformacoesValue = styled.p`
  font-weight: 400;
  text-align: end;

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
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

  @media screen and (max-width: 400px) {
    & > :not(first-child) {
      font-size: 0.7rem !important;
    }
  }
`;

export const CampoHistoricoTitle = styled.p`
  flex: 1;
  line-height: 1.2;
  margin-right: 10px;
  margin-bottom: 15px;
  pointer-events: none;
  border-bottom: 1px solid #dedede;

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const CampoHistoricoText = styled.p`
  min-width: 60px;
  text-align: end;
  pointer-events: none;
`;

export const CampoHistoricoItem = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  line-height: 2;
`;

export const CampoSintomas = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-wrap: wrap;
`;

export const CampoSintomasHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  padding-bottom: 10px;
  font-weight: 600;
  color: ${color_grey};

  @media screen and (max-width: 400px) {
    & > :not(first-child) {
      font-size: 0.7rem !important;
    }
  }
`;

export const CampoSintomasTitle = styled.p`
  flex: 1;
  line-height: 1.2;
  margin-right: 10px;
  margin-bottom: 15px;
  pointer-events: none;
  border-bottom: 1px solid #dedede;

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const CampoSintomasText = styled.p`
  min-width: 60px;
  text-align: end;
  pointer-events: none;
`;

export const CampoSintomasItem = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  line-height: 2;
`;

export const CampoResultado = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-wrap: wrap;
  justify-content: center;
`;

export const CampoResultadoHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 20px;
  color: ${color_grey};
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  font-weight: 500;
  font-size: 1.1rem;
  user-select: none;
  margin-top: -10px;
  padding-bottom: 40px;
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
    font-size: 0.9rem;
    & > :not(p) {
      padding-top: 0;
      font-size: 8px;
    }
  }
`;