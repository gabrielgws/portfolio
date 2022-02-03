import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 110px 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 50px;
  }
`

export const DeveloperContainer = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 2rem;
  }

  h2 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    margin-bottom: 10px;
    
    span {
      color: var(--blue);
    }
  }

  h3 {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

export const RedesSociaisContainer = styled.div`

  max-width: 400px;
  margin-top: 20px;

  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  .redes-sociais-ap {
    width: 200px;

    display: flex;
    justify-content: space-between;
  }

  .redes-sociais {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
  }

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`;

export const DevContainer = styled.div`
  max-width: 45%;

  display: flex;
  justify-content: center;
  align-self: center;

  @media (max-width: 1024px) {
    max-width: 60%;
  }

  @media (max-width: 768px){
    display: block;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
`;