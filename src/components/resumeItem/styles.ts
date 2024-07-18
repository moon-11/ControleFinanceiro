import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  aliiign-items: center;
  background-color: #c8c5c5;
  boreder-radius: 5px;
  padding: 5px 12px;
  width: 30%;
  border-radius: 5px;

  @media (max-width: 750px) {
    widht: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

export const header = styled.header`
  display: flex;
  aliiign-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;

  svg {
    width: 25px;
    heith: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
