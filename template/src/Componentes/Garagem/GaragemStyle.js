import * as styled from 'styled-components';

export const Button = styled.styled.button`
  background: orange;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  margin: 20px 0;

  &:hover {
    background: black;
    color: white;
  }
`;

export const GaragemContainer = styled.styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Estacionamento = styled.styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
