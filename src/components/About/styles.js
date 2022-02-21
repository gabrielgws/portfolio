import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-top: 2px solid var(--gray-800);
  border-bottom: 2px solid var(--gray-800);

  padding: 100px 2rem;

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;

    color: var(--blue);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-top: 2rem;
    border: 1px solid var(--blue);
    border-width: 0.35rem;
    border-radius: 50%;

    transform: scale(0.9);
    transition: all ease 0.9s;

    &:hover {
      transform: scale(1);
    }
  }
  
  p {
    width: 70%;
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-top: 30px;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
      width: 100%;
    }
  }  
`