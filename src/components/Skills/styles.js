import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-bottom: 2px solid var(--gray-800);

  width: 100%;
  padding: 100px 2rem;

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;

    color: var(--blue);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3{
    margin: 1rem 0 3rem 0;
    font-size: 1rem;
    font-weight: 300;
  }

  h2 {
    color: var(--white);
    font-size: 1.5rem;
  }
`

export const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;

  div {
    border: 1px solid var(--blue);
    padding: 2rem;
    margin: 1rem;

    width: 200px;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.7rem;
      text-transform: uppercase;
    }

    @media (max-width: 600px) {
      width: 100%;
      margin: 1rem;
    }
  }
`