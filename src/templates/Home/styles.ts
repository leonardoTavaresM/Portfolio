import styled from "styled-components";

export const Section = styled.section`
  background: radial-gradient(circle, #5a676a, #041f26);

  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StackWrapper = styled.div`
  position: relative;
  margin: 12px 0 12px -8px;
`;

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: left;

  padding: 0;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 120px;

  display: flex;
  gap: 1rem;
`;

export const CurriculumButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  line-height: 7rem;
`;

export const Desc = styled.p`
  /* text-align: right; */
  max-width: 400px;
  align-self: flex-end;
`;
