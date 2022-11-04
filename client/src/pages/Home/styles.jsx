import styled from 'styled-components';

const mainColor = "#005E93";


export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: #FAFAFA;
`;

export const ContainerLeft = styled.div`
  flex: 1;
  background-image: url('../../img/backgroundMain.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #FAFAFA;
  height: 100vh;

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

  @media screen and (max-width: 900px) {
    width: 100vw;
    background: #FAFAFA;
  }
`;

export const Header = styled.h1`
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
  color: ${mainColor};
  user-select: none;
`;

export const Subtitle = styled.h1`
  font-family: 'Space Mono';
  font-weight: 600;
  font-size: 2.5rem;
  margin: 0;
  margin-top: 45px;
  color: ${mainColor};
  user-select: none;
`;

export const HeaderDescription = styled.h2`
  font-family: 'Wire One', sans-serif;
  font-weight: bold;
  font-size: 1.7rem;
  text-align: center;
  margin: 0;
  margin-top: -20px;
  color: ${mainColor};
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