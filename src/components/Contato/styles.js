import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 10px 2rem 50px 2rem;

  border-bottom: 2px solid var(--gray-800);
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    color: var(--blue);
  }

  > p {
    padding: 1rem;
    max-width: 450px;
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 300;
    text-align: justify;
  }

  > div {
    width: 100%;
    padding: 1rem;

    h2 {
      font-size: 1rem;
      display: flex;
      align-items: center;

      span {
        font-size: 1rem;
        margin-left: 5px;
      }
    }

    p {
      margin-top: 0.3rem;
      margin-bottom: 2rem;
      font-weight: 300;
      color: var(--gray-100);
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`

export const ContactRedeSociais = styled.div`
  padding: 1rem;
  max-width: 200px;
  display: flex;
  justify-content: space-around;

  a {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    a {
      padding: 10px;
    }
  }
`

export const ContactLottieContainer = styled.div`
  max-width: 45%;

  display: flex;
  justify-content: center;
  align-self: center;

  @media (max-width: 768px){
    text-align: center;
    justify-content: center;
    width: 100%;
  }
`;