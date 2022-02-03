import styled from "styled-components";

export const HeaderContainer = styled.section`
  height: 5rem;
  width: 100%;
  border-bottom: 2px solid var(--gray-800);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  z-index: 999;

  background-color: rgb(32, 32, 36);
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  width: 100%;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      display: inline-flex;

      > .active::after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background-color: var(--blue);
          }

      a {
          font-size: 1rem;
          position: relative;
          padding: 0 0.5rem;
          cursor: pointer;
          height: 5rem;
          margin-left: 1rem;
          line-height: 5rem;
          color: var(--gray-300);

          transition: all ease 0.5s;

          &:hover {
            color: var(--white);
          }

          &.active {
            color: var(--white);
            font-weight: bold;
          }
      }
    }
  }
  
  @media (max-width: 767px){
    nav {
      display: block;
      ul{
        background-color: rgb(32, 32, 36);
        position: fixed;
        right: -100%;
        top: 0;
        height: 100vh;
        width: 50vw;
        padding-top: 60px;

        transition: all ease 0.3s;

        li {
          display: flex;
          justify-content: center;

          a {
            font-size: 1.5rem;
          }
        }
      }
      .active {
        right: 0;
      }
    }
  }
`

export const HeaderContainerMobileNav = styled.section`
  display: none;
  height: 5rem;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`

export const HeaderIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;

  z-index: 999;
  
  font-size: 1.7rem;

  div {
    cursor: pointer;
  }
`