import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome, AiOutlineClose } from 'react-icons/ai';

import { HeaderContainer, HeaderContent, HeaderContainerMobileNav, HeaderIcons } from './styles';

import NavLink from "./NavLink";

export default function HeaderContainerNav(){
  const [ isActive, setActive ] = useState("false");

  function handleToggle() {
    setActive(!isActive);
  }

  return(
    <HeaderContainer>
      <HeaderContent>
        <nav>
          <ul className={isActive ? "" : "active"}>
            <li><NavLink onClick={handleToggle} to="dev">Home</NavLink></li>
            <li><NavLink onClick={handleToggle} to="about">Sobre mim</NavLink></li>
            <li><NavLink onClick={handleToggle} to="projects">Projetos</NavLink></li>
            <li><NavLink onClick={handleToggle} to="skills">Habilidades</NavLink></li>
            <li><NavLink onClick={handleToggle} to="contato">Contato</NavLink></li>
          </ul>

          <HeaderContainerMobileNav>
            <HeaderIcons>
              <div>
                <NavLink to="dev"><AiFillHome /></NavLink>
              </div>

              <div>
                { isActive ?
                  (<GiHamburgerMenu onClick={handleToggle} />) : 
                  (<AiOutlineClose onClick={handleToggle}/>) }
              </div>
            </HeaderIcons>
          </HeaderContainerMobileNav>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}