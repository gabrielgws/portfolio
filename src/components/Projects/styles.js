import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
`

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 3rem;
  

  div{
    width: 350px;
    margin: 1rem 0;
    padding: 30px 10px;
    border: 2px solid var(--blue);
    color: var(--gray-900);

    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--gray-100);
    border-radius: 25px;
    transition: 1.5s;

    transform: scale(0.9);
    transition: all ease 0.9s;

    &:hover {
      transform: scale(1);
      background-color: var(--white);
    }

    img {
      width: 200px;
      height: 200px;
      border: 1px solid var(--blue);
      border-radius: 25px;
    }

    h1 {
      margin-top: 1rem;
      display: block;
      font-size: 1.5rem;
    }

    .professional {
      margin: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--white);
      background-color: var(--green-600);
    }

    .github {
      margin: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--white);
      background-color: var(--black);
    }

    .Building {
      margin: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--white);
      background-color: var(--red-500);
    }

    p {
      font-size: 1.2rem;
      margin-top: 1.5rem;
      text-align: center;
    }

    a {
      text-align: center;
      background-color: var(--blue);
      border: 0;
      margin: 1rem 0 0 0;
      width: 70%;
      padding: 0.8rem;
      border-radius: 5px;

      color: var(--white);
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    @media (max-width: 400px) {
      img {
        width: 90%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    
    div {
      transform: scale(1);
    }
  }

  @media (max-width: 500px) {
    padding: 0;
  }
`