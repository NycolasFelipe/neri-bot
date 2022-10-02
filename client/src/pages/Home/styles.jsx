import styled from 'styled-components';

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
`;

export const Subtitle = styled.h1`
  font-family: 'Space Mono';
  font-weight: 600;
  font-size: 2.5rem;
  margin: 0;
  margin-top: 45px;
`;

export const HeaderDescription = styled.h2`
  font-family: 'Wire One', sans-serif;
  font-weight: lighter;
  font-size: 1.7rem;
  text-align: center;
  margin: 0;
  margin-top: -20px;
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
    border: none;
    border-radius: 10px;
  }

  & > a {
    font-size: 0.9rem;
    padding-bottom: 30px;
  }

  & > a.criar-conta {
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;