import styled from 'styled-components';
const mainColor = "#005E93";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: #43cea2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const ContainerLeft = styled.div`
  flex: 1;
  background-image: url('../../img/backgroundMain.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  height: 100vh;
  @media screen and (max-width: 1100px) {
    background-size: 80%;
  }
  @media screen and (max-width: 900px) {
    background-image: none;
    flex: none;
  }
`;

export const ContainerRight = styled.div`
  background: #eee;
  width: 400px;
  height: 100vh;
  right: 0;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 100vw;
    background: #FAFAFA;
  }
`;

export const Header = styled.div`
  margin: 0 auto;
  padding-top: 40px;
  pointer-events: none;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 5px;
  font-size: 3rem;
`;

export const Title = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 5rem;
  font-weight: 600;
  margin: 0;
  background: -webkit-linear-gradient(to right, #185a9d, #43cea2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  user-select: none;
`;

export const Subtitle = styled.h1`
  font-family: 'Space Mono';
  font-weight: 600;
  font-size: 2.5rem;
  margin: 0;
  margin-top: 45px;
  color: #41C8A2;
  user-select: none;
`;

export const HeaderDescription = styled.h2`
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  margin-top: -20px;
  color: #185a9d;
  user-select: none;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 30px;
  margin: 0 auto;
  max-width: 280px;

  & > div > input {
    color: #2369a1;
    background: #eee;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
  }

  & > a {
    font-size: 0.9rem;
    padding-bottom: 30px;
    color: ${mainColor};
  }

  & > a.criar-conta {
    margin: 0 auto;
    font-size: 0.8rem;
    color: ${mainColor};
  }

  & > button:hover {
    background: #2ac954;
  }
`;

export const ErrorMessage = styled.span`
  margin: 0 auto;
  color: red;
  font-size: 0.8rem;
`;

export const AboutSection = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 20px 0;

  & > button {
    color: ${mainColor};
  }
`;