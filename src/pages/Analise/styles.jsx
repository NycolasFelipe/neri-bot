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
  overflow-x: hidden;
  padding-bottom: 40px;

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
  min-height: 400px;
  width: 90%;
  box-sizing: border-box;
  padding: 15px 25px;
  /* font-family: monospace; */
  font-size: 1rem;
`;

export const CampoTitle = styled.div`
  font-weight: bold;
`;

export const CampoTab = styled.div`
  padding-left: 32px;
  padding-bottom: 16px;
`;

export const CampoAnalise = styled.div``;

export const CampoColor = styled.div`
  background: ${(props) => props.color};
  color: #fff;
  margin-top: 16px;
  border-radius: 5px;
  padding: 16px 0;
  pointer-events: none;
`;

export const CampoFooter = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;